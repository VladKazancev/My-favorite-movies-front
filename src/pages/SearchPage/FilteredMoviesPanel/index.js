import React from "react";
import ToggleButtons from "components/ToggleButtons";
import SearchMovieViewWrapper from "../SearchMovieViewWrapper";
import PageSwitcher from "../PageSwitcher";
import FilteredMoviesPanelContainer from "./styled";
import useViewMode from "components/hooks/useViewMode";
import { useTranslation } from "react-i18next";

export default function FilteredMoviesPanel(props) {
  const [viewMode, setViewMode] = useViewMode();
  const { t } = useTranslation("searchPage");
  const moviesInfo = props.moviesInfo;
  if (!moviesInfo) return <></>;
  return (
    <FilteredMoviesPanelContainer
      length={moviesInfo.length}
      viewMode={viewMode}
    >
      <div name="searchTitle">
        <PageSwitcher
          setPage={(object) => props.setPage(object)}
          actualPage={props.actualPage}
          isNextPage={props.isNextPage}
        />
        <ToggleButtons viewMode={viewMode} onClickToggleButton={setViewMode} />
      </div>
      <div name="searchPanel">
        <div name="searchEmptyLabel">{t("emptyLabel")}</div>
        {props.moviesInfo.map((current) => (
          <SearchMovieViewWrapper
            key={current.id}
            movieInfo={current}
            viewMode={viewMode}
          />
        ))}
      </div>
    </FilteredMoviesPanelContainer>
  );
}
