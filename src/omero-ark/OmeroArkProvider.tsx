import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import React, { useState } from "react";
import { createOmeroArkClient } from "./client";
import { OmeroArkContext } from "./OmeroArkContext";
import { OmeroArkConfig, OmeroArkState } from "./types";

export type OmeroArkProps = {
  children: React.ReactNode;
  clientCreator?: (
    config: OmeroArkConfig
  ) => ApolloClient<NormalizedCacheObject>;
};

export const OmeroArkProvider: React.FC<OmeroArkProps> = ({
  children,
  clientCreator = createOmeroArkClient,
}) => {
  const [state, setState] = useState<OmeroArkState>({
    config: undefined,
    client: undefined,
  });

  const configure = (config?: OmeroArkConfig) => {
    if (!config) {
      setState({
        config: undefined,
        client: undefined,
      });
      return;
    }

    setState({ config: config, client: clientCreator(config) });
  };

  return (
    <OmeroArkContext.Provider
      value={{
        configure: configure,
        ...state,
      }}
    >
      {children}
    </OmeroArkContext.Provider>
  );
};
