import { useMutation } from "@apollo/client";
import { SET_FAVORITE_MOVIES } from "api/mutations/favoriteMovie";

export default function useFavoriteMoviesMutation(onCompleted, movieId) {
  const [setFavoriteMovies] = useMutation(SET_FAVORITE_MOVIES, {
    variables: { movieId },
    onCompleted: () => onCompleted(),
  });
  return setFavoriteMovies;
}
