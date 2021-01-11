import React from "react";
import i18n from "i18next";
import { useQuery } from "@apollo/client";
import { GET_MOVIE_BY_ID } from "api/queries/movie";
import ServiceButtons from "components/ServiceButtons";
import MovieView from "components/MovieView";

export default function MovieViewWrapper(props) {
  const { isViewed, isBlockView, movieId, updateFavoriteMovies } = props;
  const { loading, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { movieId, language: i18n.language },
  });
  if (loading) return null;
  return (
    <MovieView
      movieInfo={data.movie}
      isBlockView={isBlockView}
      isActive={!isViewed}
    >
      <ServiceButtons
        movieId={movieId}
        updateFavoriteMovies={updateFavoriteMovies}
      />
    </MovieView>
  );
}
