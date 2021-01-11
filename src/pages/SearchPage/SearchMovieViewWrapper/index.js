import React from "react";
import useFavoriteMoviesMutation from "components/hooks/useFavoriteMoviesMutation";
import MovieView from "components/MovieView";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import AddFilmButton from "./styled";

export default function SearchMovieViewWrapper(props) {
  const {
    movieInfo,
    isBlockView,
    isFavorite,
    movieInfo: { id: movieId },
  } = props;
  const setFavoriteMovies = useFavoriteMoviesMutation(
    props.updateFavoriteMovies,
    movieId
  );
  const { t } = useTranslation("searchPage");
  const buttonText = isBlockView ? t("add") : t("addToFavorite");
  return (
    <MovieView
      movieInfo={movieInfo}
      isBlockView={isBlockView}
      isActive={!isFavorite}
    >
      <AddFilmButton
        disabled={isFavorite}
        lng={i18n.language}
        onClick={() => setFavoriteMovies()}
        isBlockView={isBlockView}
        id={movieId}
      >
        {buttonText}
      </AddFilmButton>
    </MovieView>
  );
}
