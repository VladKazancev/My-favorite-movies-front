import { gql } from "@apollo/client";

export const Response = gql`
  fragment Response on Answer {
    status
    message
  }
`;
