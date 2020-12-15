import React, { useState } from "react";
import StyledTag from "components/Tag/styled";
import { ucFirst } from "utils";

export default function Genre(props) {
  const { id, text } = props;
  const [isActive, setActivity] = useState(false);
  const handleClickGenre = (e) => {
    props.onChangeSelectedGenres(e.target.id, isActive);
    setActivity(!isActive);
  };
  return (
    <StyledTag md isActive={isActive} id={id} onClick={handleClickGenre}>
      {ucFirst(text)}
    </StyledTag>
  );
}
