import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StyledTag from "./styled";
import { getFavorite, setFavoriteGenres } from "utils";

export default function Tag({ text, id }) {
  const [isActive, setActivity] = useState(
    Boolean(getFavorite("favoriteGenres")[id])
  );
  const { t } = useTranslation("genres");
  const handleClickTag = () => {
    setFavoriteGenres(id, text, isActive);
    setActivity(!isActive);
  };
  return (
    <StyledTag isActive={isActive} onClick={() => handleClickTag()}>
      {t(text)}
    </StyledTag>
  );
}
