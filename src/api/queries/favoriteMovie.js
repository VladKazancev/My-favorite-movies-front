import { gql } from "@apollo/client";

export const GET_FAVORITE_MOVIES = gql`
  query getFavoriteMovies {
    favoriteMovies {
      movieId
      isViewed
    }
  }
`;
