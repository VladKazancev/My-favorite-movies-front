import React, { useState } from "react";
import ToggleButtons from "components/ToggleButtons";
import useFavoriteMovies from "components/hooks/useFavoriteMovies";
import SearchMovieViewWrapper from "../SearchMovieViewWrapper";
import PageSwitcher from "../PageSwitcher";
import FilteredMoviesPanelContainer from "./styled";
import { useTranslation } from "react-i18next";

export default function FilteredMoviesPanel(props) {
  const { favoriteMovies, refetch } = useFavoriteMovies();
  const [isBlockView, setIsBlockView] = useState(true);
  const { t } = useTranslation("searchPage");
  const { actualPage, isNextPage, moviesInfo, moviesLoading } = props;
  return (
    <FilteredMoviesPanelContainer
      length={moviesInfo.length}
      isBlockView={isBlockView}
      moviesLoading={moviesLoading}
    >
      <div name="searchTitle">
        <PageSwitcher
          setPage={(object) => props.setPage(object)}
          actualPage={actualPage}
          isNextPage={isNextPage}
        />
        <ToggleButtons
          isBlockView={isBlockView}
          onClickToggleButton={setIsBlockView}
        />
      </div>
      <div name="searchPanel">
        <div name="searchEmptyLabel">{t("emptyLabel")}</div>
        {moviesInfo.map((current) => {
          const isFavorite = favoriteMovies.some(
            ({ movieId }) => current.id === movieId
          );
          return (
            <SearchMovieViewWrapper
              key={current.id}
              movieInfo={current}
              isBlockView={isBlockView}
              isFavorite={isFavorite}
              updateFavoriteMovies={() => refetch()}
            />
          );
        })}
      </div>
    </FilteredMoviesPanelContainer>
  );
}
