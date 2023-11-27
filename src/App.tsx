import { useState } from "react";
import "./App.css";
import {
  FaktsProvider,
  FaktsGuard,
  useFakts,
  WellKnownDiscovery,
} from "@jhnnsrs/fakts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Callback } from "./contrib/Callback";
import { NoHerre } from "./NoHerre";
import { HerreGuard, HerreProvider, useHerre } from "@jhnnsrs/herre";
import { OmeroArkGuard, OmeroArkProvider, withOmeroArk } from "./omero-ark";
import { OmeroArkAutoConfigure } from "./contrib/OmeroArkAutoConfigure";
import { NoOmeroArk } from "./NoOmeroArk";
import { FaktsLogin } from "./contrib/FaktsLogin";
import { TestNode } from "./contrib/TestNode";
import { useEnsureOmeroUserMutation, useListProjectsQuery } from "./omero-ark/api/graphql";

export const Log = () => {
  const fakts = useFakts();
  const herre = useHerre();

  return (
    <>
      <button
        onClick={() => {
          herre.logout();
          fakts.setFakts(null);
        }}
      >
        ssss
      </button>
      <pre style={{ maxWidth: "200px" }}>
        {fakts && JSON.stringify(fakts, null, 2)}
      </pre>
    </>
  );
};


export const Datasets = () => {
  const { data, error } = withOmeroArk(useListProjectsQuery)();

  return (
    <>
      {error && <div>{error.message}</div>}
      {data?.projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ))}
      
    </>
  );
};

export const EnsureMeButton = () => {


  const [setMe, data] = withOmeroArk(useEnsureOmeroUserMutation)();


  return <button onClick={() => setMe({ variables: { password: "omero", username: "root"}})}> Set me</button>



}


export const ProtectedApp = () => {
  return (
    <HerreGuard fallback={<NoHerre />}>
      <OmeroArkProvider>
        <Log />
        <OmeroArkAutoConfigure />
        <OmeroArkGuard fallback={<NoOmeroArk />}>
          <TestNode />
          <EnsureMeButton />
          <Datasets />

        </OmeroArkGuard>
      </OmeroArkProvider>
    </HerreGuard>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FaktsProvider>
        <WellKnownDiscovery endpoints={["http://localhost:8000"]} />
        <FaktsGuard fallback={<FaktsLogin />}>
          <HerreProvider>
            <Router>
              <Routes>
                <Route path="/" element={<ProtectedApp />} />
                <Route path="/callback" element={<Callback />} />
              </Routes>
            </Router>
          </HerreProvider>
        </FaktsGuard>
      </FaktsProvider>
    </div>
  );
}

export default App;
