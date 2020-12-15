import React from "react";
import { useTranslation } from "react-i18next";
import DisplayContainer from "./styled";

export default function DisplayMovieInfoHelper({
  isBlockView,
  voteAverage,
  releaseDate,
}) {
  const { t } = useTranslation("moviesInfo");
  return (
    <>
      <DisplayContainer isBlockView={isBlockView}>
        <div className="mr-1">{t("releaseDate")}</div>
        <div className="text-orange-500">{releaseDate}</div>
      </DisplayContainer>
      <DisplayContainer isBlockView={isBlockView}>
        <div className="mr-1">{t("rating")}</div>
        <div className="text-orange-500">{voteAverage}</div>
      </DisplayContainer>
    </>
  );
}
