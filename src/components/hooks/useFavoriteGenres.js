import { useQuery } from "@apollo/client";
import { GET_FAVORITE_GENRES } from "api/queries/favoriteGenre";

export default function useFavoriteGenres() {
  const { loading, data, refetch } = useQuery(GET_FAVORITE_GENRES);
  const favoriteGenres = loading ? [] : data.favoriteGenres;
  return { favoriteGenres, refetch };
}
