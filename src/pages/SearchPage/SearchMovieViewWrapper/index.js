import React, { useState } from "react";
import MovieView from "components/MovieView";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { addFavoriteMovie, getFavorite } from "utils";
import AddFilmButton from "./styled";

export default function SearchMovieViewWrapper({ movieInfo, isBlockView }) {
  const [isActive, setActivity] = useState(
    typeof getFavorite("favoriteMovies")[movieInfo.id] === "undefined"
  );
  const { t } = useTranslation("searchPage");
  const buttonText = isBlockView ? t("add") : t("addToFavorite");
  const handleClickAddButton = (e) => {
    addFavoriteMovie(e.target.id);
    setActivity(!isActive);
  };
  return (
    <MovieView
      movieInfo={movieInfo}
      isBlockView={isBlockView}
      isActive={isActive}
    >
      <AddFilmButton
        disabled={!isActive}
        lng={i18n.language}
        onClick={handleClickAddButton}
        isBlockView={isBlockView}
        id={movieInfo.id}
      >
        {buttonText}
      </AddFilmButton>
    </MovieView>
  );
}
