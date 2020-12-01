import React, { useEffect, useState } from "react";
import {
  getFavorite,
  addFavoriteMovies,
  deleteFavoriteMovie,
  markAsViewed,
} from "../../../../utils";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import MoviesPanelTitle from "../MoviesPanelTitle";
import MovieViewWrapper from "../../../../components/MovieViewWrapper";

export default function MoviesPanel() {
  const { t } = useTranslation("mainPage");
  const [favoriteMovies, setFavoriteMovies] = useState(
    getFavorite("favoriteMovies")
  );
  const [viewMode, setViewMode] = useState("block");
  useEffect(() => {
    if (!getFavorite("favoriteMovies").length) {
      // Временно, до разработки Search page
      addFavoriteMovies().then((data) => setFavoriteMovies(data));
    }
  }, []);
  const handleClickDeleteButton = (e) => {
    setFavoriteMovies(
      deleteFavoriteMovie(favoriteMovies, e.currentTarget.value)
    );
  };
  const handleClickConfirmButton = (e) => {
    setFavoriteMovies(markAsViewed(favoriteMovies, e.currentTarget.value));
  };
  const handleClickToggleButton = (e) => {
    const name = e.target.name;
    if (viewMode !== name) setViewMode(name);
  };
  const containerClassname = classnames(
    "flex",
    "w-full",
    "rounded-2xl",
    "bg-grayv2-main",
    "p-4",
    { "flex-col": viewMode === "list" },
    { "justify-around": viewMode === "block" },
    { "flex-wrap": viewMode === "block" }
  );
  return (
    <div className="flex flex-col items-center my-16 w-9/12 ">
      <MoviesPanelTitle
        title={t("moviesPanelTitle")}
        buttonText={t("addButtonText")}
        viewMode={viewMode}
        onClickToggleButton={() => handleClickToggleButton}
      />
      <div className={containerClassname}>
        {favoriteMovies.map((current) => (
          <MovieViewWrapper
            key={current.id}
            movie={current}
            onClickDelete={() => handleClickDeleteButton}
            onClickConfirm={() => handleClickConfirmButton}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}
