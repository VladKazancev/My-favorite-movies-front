import React from "react";
import { useMutation } from "@apollo/client";
import useFavoriteMoviesMutation from "components/hooks/useFavoriteMoviesMutation";
import { SET_IS_FAVORITE_MOVIE_VIEWED } from "api/mutations/favoriteMovie";
import { DELETE_MOVIE, CONFIRM_MOVIE } from "./consts";

export default function ServiceButtons({ movieId, updateFavoriteMovies }) {
  const setFavoriteMovies = useFavoriteMoviesMutation(
    updateFavoriteMovies,
    movieId
  );
  const [setIsFavoriteMovieViewed] = useMutation(SET_IS_FAVORITE_MOVIE_VIEWED, {
    variables: { movieId },
    onCompleted: () => updateFavoriteMovies(),
  });
  const serviceButtonsClassname =
    "bg-blackv2-main hover:shadow-service rounded-lg py-1 w-45 flex justify-center focus:outline-none";
  return (
    <div className="flex justify-between w-11/12 mt-3 mb-4">
      <button
        onClick={() => setIsFavoriteMovieViewed()}
        className={serviceButtonsClassname}
      >
        <img className="w-35px" alt="confirm" src={CONFIRM_MOVIE} />
      </button>
      <button
        onClick={() => setFavoriteMovies()}
        className={serviceButtonsClassname}
      >
        <img className="w-30px" alt="delete" src={DELETE_MOVIE} />
      </button>
    </div>
  );
}
