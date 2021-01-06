import { gql } from "@apollo/client";

export const GET_FAVORITE_GENRES = gql`
  query getFavoriteGenres {
    favoriteGenres
  }
`;
