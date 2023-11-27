import React, { useEffect } from "react";
import { useFakts } from "@jhnnsrs/fakts";
import { useHerre } from "@jhnnsrs/herre";
import { useOmeroArk } from "../omero-ark";

export const OmeroArkAutoConfigure: React.FC<{}> = (props) => {
  const { configure } = useOmeroArk();
  const { token } = useHerre();
  const { fakts } = useFakts();

  useEffect(() => {
    if (token && fakts.omero_ark) {
      configure({
        secure: fakts.omero_ark.secure,
        wsEndpointUrl: fakts.omero_ark.ws_endpoint_url,
        endpointUrl: fakts.omero_ark.endpoint_url,
        retrieveToken: () => token,
      });
    }
  }, [token, fakts]);

  return <> </>;
};
