import React, { useState, useEffect } from "react";
import i18n from "i18next";
import Header from "components/Header";
import useGenres from "components/hooks/useGenres";
import Filters from "./Filters";
import FilteredMoviesPanel from "./FilteredMoviesPanel";
import SearchPageContainer from "./styled";
import { getFilteredMovies, formatingGenres } from "utils";

export default function SearchPage() {
  const [queryKeys, setQueryKeys] = useState({
    releaseYear: 2020,
    rating: 5,
    selectedGenres: [],
  });
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const genresFromApi = useGenres(i18n.language);
  const [moviesInfo, setMoviesInfo] = useState();
  useEffect(() => {
    getFilteredMovies(i18n.language, page, queryKeys).then((data) => {
      const results = data.results;
      setIsNextPage(results.length === 20);
      setMoviesInfo(formatingGenres(results, genresFromApi));
    });
  }, [queryKeys, i18n.language, page, genresFromApi]);
  return (
    <SearchPageContainer>
      <Header />
      <Filters
        queryKeys={queryKeys}
        setQueryKeys={(object) => setQueryKeys(object)}
        genresFromApi={genresFromApi}
        setPage={(number) => setPage(number)}
      />
      <FilteredMoviesPanel
        actualPage={page}
        isNextPage={isNextPage}
        setPage={(number) => setPage(number)}
        moviesInfo={moviesInfo}
      />
    </SearchPageContainer>
  );
}
