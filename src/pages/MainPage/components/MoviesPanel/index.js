import React, { useState } from "react";
import useFavoriteMovies from "components/hooks/useFavoriteMovies";
import MoviesPanelContainer from "./styled";
import { useTranslation } from "react-i18next";
import MoviesPanelTitle from "../MoviesPanelTitle";
import MovieViewWrapper from "../MovieViewWrapper";

export default function MoviesPanel() {
  const { t } = useTranslation("mainPage");
  const { favoriteMovies, refetch } = useFavoriteMovies();
  const [isBlockView, setIsBlockView] = useState(true);
  return (
    <div className="flex flex-col items-center my-16 w-9/12 ">
      <MoviesPanelTitle
        title={t("moviesPanelTitle")}
        buttonText={t("addButtonText")}
        isBlockView={isBlockView}
        onClickToggleButton={setIsBlockView}
      />
      <MoviesPanelContainer
        length={favoriteMovies.length}
        isBlockView={isBlockView}
      >
        <div name="mainEmptyLabel">{t("emptyLabel")}</div>
        {favoriteMovies.map(({ movieId, isViewed }) => (
          <MovieViewWrapper
            key={movieId}
            movieId={movieId}
            isViewed={isViewed}
            updateFavoriteMovies={() => refetch()}
            isBlockView={isBlockView}
          />
        ))}
      </MoviesPanelContainer>
    </div>
  );
}
