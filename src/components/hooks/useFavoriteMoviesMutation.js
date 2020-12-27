import { useMutation } from "@apollo/client";
import { SET_FAVORITE_MOVIES } from "apolloClient/mutations";

export default function useFavoriteMoviesMutation(onCompleted, movieId) {
  const [setFavoriteMovies] = useMutation(SET_FAVORITE_MOVIES, {
    variables: { movieId },
    onCompleted: () => onCompleted(),
  });
  return setFavoriteMovies;
}
