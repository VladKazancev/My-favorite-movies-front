import { gql } from "@apollo/client";

export const GET_GENRES = gql`
  query getGenres($language: String!) {
    genres(language: $language) {
      id
      name
    }
  }
`;
