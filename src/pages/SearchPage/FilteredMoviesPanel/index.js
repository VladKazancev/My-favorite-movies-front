import React, { useState } from "react";
import ToggleButtons from "components/ToggleButtons";
import SearchMovieViewWrapper from "../SearchMovieViewWrapper";
import PageSwitcher from "../PageSwitcher";
import FilteredMoviesPanelContainer from "./styled";
import { useTranslation } from "react-i18next";

export default function FilteredMoviesPanel(props) {
  const [isBlockView, setIsBlockView] = useState(true);
  const { t } = useTranslation("searchPage");
  const { actualPage, isNextPage, moviesInfo } = props;
  if (!moviesInfo) return null;
  return (
    <FilteredMoviesPanelContainer
      length={moviesInfo.length}
      isBlockView={isBlockView}
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
        {moviesInfo.map((current) => (
          <SearchMovieViewWrapper
            key={current.id}
            movieInfo={current}
            isBlockView={isBlockView}
          />
        ))}
      </div>
    </FilteredMoviesPanelContainer>
  );
}
