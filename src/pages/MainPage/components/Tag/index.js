import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StyledTag from "./styled";
import { getFavorite, setFavoriteGenres } from "utils";

export default function Tag({ text }) {
  const [isActive, setActivity] = useState(
    getFavorite("favoriteGenres").includes(text)
  );
  const { t } = useTranslation("genres");
  const handleClickTag = (e) => {
    setFavoriteGenres(e.target.value, isActive);
    setActivity(!isActive);
  };
  return (
    <StyledTag
      isActive={isActive}
      value={text}
      onClick={(e) => handleClickTag(e)}
    >
      {t(text)}
    </StyledTag>
  );
}
