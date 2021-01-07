import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Genres from "../Genres";
import CustomSlider from "../CustomSlider";
import CustomSelect from "../CustomSelect";
import FiltersContainer from "./styled";
import { setFilteredGenres } from "utils";

export default function Filters(props) {
  const { queryKeys, genresFromApi } = props;
  const { t } = useTranslation("searchPage");
  const [rating, setRating] = useState(queryKeys.rating);
  const [releaseYear, setReleaseYear] = useState(queryKeys.releaseYear);
  const [selectedGenres, setSelectedGenres] = useState(
    queryKeys.selectedGenres
  );
  const handleChangeSelectedGenres = (id, isActive) => {
    const updatedGenres = setFilteredGenres(selectedGenres, id, isActive);
    setSelectedGenres(updatedGenres);
  };
  useEffect(() => {
    props.setQueryKeys({
      releaseYear: releaseYear,
      rating: rating,
      selectedGenres: selectedGenres,
    });
    props.setPage(1);
  }, [rating, releaseYear, selectedGenres]);
  return (
    <FiltersContainer>
      <div name="filtersTitle">{t("title")}</div>
      <Genres
        genresFromApi={genresFromApi}
        selectedGenres={selectedGenres}
        onChangeSelectedGenres={handleChangeSelectedGenres}
      />
      <div name="filtersMain">
        <CustomSlider
          onChangeRating={(actualRating) => setRating(actualRating)}
        />
        <CustomSelect
          onChangeSelect={(actualYear) => setReleaseYear(actualYear)}
        />
      </div>
    </FiltersContainer>
  );
}
