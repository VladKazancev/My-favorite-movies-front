import React, { useEffect, useState } from "react";
import { getFavorite, addFavoriteMovies, setFavoriteMoviesHelper } from "utils";
import MoviesPanelContainer from "./styled";
import { useTranslation } from "react-i18next";
import MoviesPanelTitle from "../MoviesPanelTitle";
import MovieViewWrapper from "components/MovieViewWrapper";

export default function MoviesPanel() {
  const { t } = useTranslation("mainPage");
  const [favoriteMovies, setFavoriteMovies] = useState(
    getFavorite("favoriteMovies")
  );
  const [viewMode, setViewMode] = useState("block");
  useEffect(() => {
    if (!Object.keys(getFavorite("favoriteMovies")).length) {
      // Временно, до разработки Search page
      addFavoriteMovies().then((data) => setFavoriteMovies(data));
    }
  }, []);
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
  const handleClickToggleButton = (e) => {
    const name = e.target.name;
    if (viewMode !== name) setViewMode(name);
  };
  return (
    <div className="flex flex-col items-center my-16 w-9/12 ">
      <MoviesPanelTitle
        title={t("moviesPanelTitle")}
        buttonText={t("addButtonText")}
        viewMode={viewMode}
        onClickToggleButton={() => handleClickToggleButton}
      />
      <MoviesPanelContainer viewMode={viewMode}>
        {Object.keys(favoriteMovies).map((current) => (
          <MovieViewWrapper
            key={current}
            movieId={current}
            isViewed={favoriteMovies[current]}
            onClickDelete={() => handleClickDeleteButton}
            onClickConfirm={() => handleClickConfirmButton}
            viewMode={viewMode}
          />
        ))}
      </MoviesPanelContainer>
    </div>
  );
}
