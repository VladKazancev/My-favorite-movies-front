import { gql } from "@apollo/client";
import { Response } from "./commonFragments";

export const SET_FAVORITE_MOVIES = gql`
  mutation setFavoriteMovies($movieId: ID!) {
    setFavoriteMovies(movieId: $movieId) {
      ...Response
    }
  }
  ${Response}
`;
export const SET_IS_FAVORITE_MOVIE_VIEWED = gql`
  mutation setIsFavoriteMovieViewed($movieId: ID!) {
    setIsFavoriteMovieViewed(movieId: $movieId) {
      ...Response
    }
  }
  ${Response}
`;
