import {
  ApolloClient,
  NormalizedCacheObject,
  PossibleTypesMap,
} from "@apollo/client";

export type OmeroArkConfig = {
  endpointUrl: string;
  wsEndpointUrl: string;
  secure: boolean;
  retrieveToken: () => string;
  possibleTypes?: PossibleTypesMap;
};

export type OmeroArkState = {
  config?: OmeroArkConfig;
  client?: OmeroArkClient;
};

export type OmeroArkContextType = OmeroArkState & {
  configure: (config?: OmeroArkConfig) => void;
};

export type OmeroArkClient = ApolloClient<NormalizedCacheObject>;
