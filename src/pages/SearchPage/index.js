import React, { useState } from "react";
import useFilteredMovies from "components/hooks/useFilteredMovies";
import i18n from "i18next";
import Header from "components/Header";
import useGenres from "components/hooks/useGenres";
import Filters from "./Filters";
import FilteredMoviesPanel from "./FilteredMoviesPanel";
import SearchPageContainer from "./styled";

export default function SearchPage() {
  const genres = useGenres(i18n.language);
  const [queryKeys, setQueryKeys] = useState({
    releaseYear: 2020,
    rating: 5,
    selectedGenres: [],
  });
  const [page, setPage] = useState(1);
  const { moviesInfo, moviesLoading } = useFilteredMovies(
    i18n.language,
    page,
    queryKeys,
    genres
  );
  const isNextPage = moviesLoading ? false : moviesInfo.length === 20;
  return (
    <SearchPageContainer>
      <Header />
      <Filters
        queryKeys={queryKeys}
        setQueryKeys={(object) => setQueryKeys(object)}
        genresFromApi={genres}
        setPage={(number) => setPage(number)}
      />
      <FilteredMoviesPanel
        actualPage={page}
        isNextPage={isNextPage}
        setPage={(number) => setPage(number)}
        moviesInfo={moviesInfo}
        moviesLoading={moviesLoading}
      />
    </SearchPageContainer>
  );
}
