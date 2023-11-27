import { gql } from "@apollo/client";
import { withOmeroArk, useOmeroArkQuery } from "../omero-ark";

export const TestNode: React.FC = (props) => {
  const { data } = useOmeroArkQuery(gql`
    {
      datasets {
        name
      }
    }
  `);

  return (
    <>
      <div>{data && JSON.stringify(data)}</div>
    </>
  );
};
