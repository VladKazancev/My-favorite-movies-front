import React, { useState } from "react";
import { getFavorite, setFavoriteMoviesHelper } from "utils";
import MoviesPanelContainer from "./styled";
import { useTranslation } from "react-i18next";
import MoviesPanelTitle from "../MoviesPanelTitle";
import MovieViewWrapper from "../MovieViewWrapper";

export default function MoviesPanel() {
  const { t } = useTranslation("mainPage");
  const [favoriteMovies, setFavoriteMovies] = useState(
    getFavorite("favoriteMovies")
  );
  const [isBlockView, setIsBlockView] = useState(true);
  const handleClickDeleteButton = (e) => {
    setFavoriteMovies(
      setFavoriteMoviesHelper(favoriteMovies, e.currentTarget.value, "delete")
    );
  };
  const handleClickConfirmButton = (e) => {
    setFavoriteMovies(
      setFavoriteMoviesHelper(favoriteMovies, e.currentTarget.value)
    );
  };
  const moviesKeys = Object.keys(favoriteMovies);
  return (
    <div className="flex flex-col items-center my-16 w-9/12 ">
      <MoviesPanelTitle
        title={t("moviesPanelTitle")}
        buttonText={t("addButtonText")}
        isBlockView={isBlockView}
        onClickToggleButton={setIsBlockView}
      />
      <MoviesPanelContainer
        length={moviesKeys.length}
        isBlockView={isBlockView}
      >
        <div name="mainEmptyLabel">{t("emptyLabel")}</div>
        {moviesKeys.map((current) => (
          <MovieViewWrapper
            key={current}
            movieId={current}
            isViewed={favoriteMovies[current]}
            onClickDelete={() => handleClickDeleteButton}
            onClickConfirm={() => handleClickConfirmButton}
            isBlockView={isBlockView}
          />
        ))}
      </MoviesPanelContainer>
    </div>
  );
}
