import { useQuery } from "@apollo/client";
import { GET_FILTERED_MOVIES } from "api/queries/movie";
import { formatingGenres } from "utils";

export default function useFilteredMovies(language, page, queryKeys, genres) {
  const { loading, data } = useQuery(GET_FILTERED_MOVIES, {
    variables: { language, page, queryKeys },
  });
  const moviesInfo = loading
    ? []
    : formatingGenres(data.filteredMovies, genres);
  return { moviesInfo, moviesLoading: loading };
}
