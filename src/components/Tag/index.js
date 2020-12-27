import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { SET_FAVORITE_GENRES } from "apolloClient/mutations";
import StyledTag from "./styled";

export default function Tag(props) {
  const { name, genreId, isFavorite } = props;
  const [setFavoriteGenres] = useMutation(SET_FAVORITE_GENRES, {
    variables: { genreId },
    onCompleted: props.updateFavoriteGenres,
  });
  const { t } = useTranslation("genres");
  return (
    <StyledTag isActive={isFavorite} onClick={setFavoriteGenres}>
      {t(name)}
    </StyledTag>
  );
}
