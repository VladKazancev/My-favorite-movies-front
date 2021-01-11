import React from "react";
import GenresContainer from "./styled";
import StyledTag from "components/Tag/styled";
import { ucFirst } from "utils";

export default function Genres(props) {
  const { genresFromApi, selectedGenres } = props;
  return (
    <GenresContainer>
      {genresFromApi.map(({ id, name }) => {
        const isActive = selectedGenres.some((current) => current === id);
        return (
          <StyledTag
            md
            isActive={isActive}
            key={id}
            id={id}
            onClick={(e) => props.onChangeSelectedGenres(e.target.id, isActive)}
          >
            {ucFirst(name)}
          </StyledTag>
        );
      })}
    </GenresContainer>
  );
}
