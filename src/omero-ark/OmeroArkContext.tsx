import { OmeroArkClient, OmeroArkConfig, OmeroArkContextType } from "./types";
import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

export const OmeroArkContext = React.createContext<OmeroArkContextType>({
  configure: () => {
    throw Error("No Provider in context not configured");
  },
});

export const useOmeroArk = () => useContext(OmeroArkContext);

export const useOmeroArkQuery = (query: any) => {
  const { client } = useOmeroArk();
  return useQuery(query, { client: client });
};

export function withOmeroArk<T extends (options: any) => any>(func: T): T {
  const Wrapped = (nana: any) => {
    const { client } = useOmeroArk();
    return func({ ...nana, client: client });
  };
  return Wrapped as T;
}
