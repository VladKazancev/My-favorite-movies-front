import { gql } from "@apollo/client";

const MOVIE_INFO = gql`
  fragment MovieInfo on Movie {
    id
    title
    poster_path
    production_companies
    release_date
    vote_average
    adult
    overview
  }
`;
export const GET_MOVIE_BY_ID = gql`
  query getMovieById($movieId: ID!, $language: String!) {
    movie(id: $movieId, language: $language) {
      ...MovieInfo
      genres {
        id
        name
      }
    }
  }
  ${MOVIE_INFO}
`;
export const GET_FILTERED_MOVIES = gql`
  query getFilteredMovies(
    $language: String!
    $page: Int!
    $queryKeys: QueryKeys!
  ) {
    filteredMovies(language: $language, page: $page, queryKeys: $queryKeys) {
      ...MovieInfo
      genre_ids
    }
  }
  ${MOVIE_INFO}
`;
