import { useQuery } from "@apollo/client";
import { GET_FAVORITE_MOVIES } from "apolloClient/queries";

export default function useFavoriteMovies() {
  const { loading, data, refetch } = useQuery(GET_FAVORITE_MOVIES);
  const favoriteMovies = loading ? [] : data.favoriteMovies;
  return { favoriteMovies, refetch };
}
