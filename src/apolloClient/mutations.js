import { gql } from "@apollo/client";

const AnswerFragment = gql`
  fragment AnswerFragment on Answer {
    status
    message
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
export const SET_FAVORITE_GENRES = gql`
  mutation setFavoriteGenres($genreId: ID!) {
    setFavoriteGenres(genreId: $genreId) {
      ...AnswerFragment
    }
  }
  ${AnswerFragment}
`;
export const SET_FAVORITE_MOVIES = gql`
  mutation setFavoriteMovies($movieId: ID!) {
    setFavoriteMovies(movieId: $movieId) {
      ...AnswerFragment
    }
  }
  ${AnswerFragment}
`;
export const SET_IS_FAVORITE_MOVIE_VIEWED = gql`
  mutation setIsFavoriteMovieViewed($movieId: ID!) {
    setIsFavoriteMovieViewed(movieId: $movieId) {
      ...AnswerFragment
    }
  }
  ${AnswerFragment}
`;
