import { useQuery } from "@apollo/client";
import { GET_FAVORITE_MOVIES } from "api/queries/favoriteMovie";

export default function useFavoriteMovies() {
  const { loading, data, refetch } = useQuery(GET_FAVORITE_MOVIES);
  const favoriteMovies = loading ? [] : data.favoriteMovies;
  return { favoriteMovies, refetch };
}
