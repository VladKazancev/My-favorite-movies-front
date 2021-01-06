import { gql } from "@apollo/client";
import { Response } from "./commonFragments";

export const SET_FAVORITE_GENRES = gql`
  mutation setFavoriteGenres($genreId: ID!) {
    setFavoriteGenres(genreId: $genreId) {
      ...Response
    }
  }
  ${Response}
`;
