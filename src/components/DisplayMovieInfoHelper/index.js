import React from "react";
import { useTranslation } from "react-i18next";
import DisplayContainer from "./styled";

export default function DisplayMovieInfoHelper(props) {
  const { t } = useTranslation("moviesInfo");
  return (
    <>
      <DisplayContainer viewMode={props.viewMode}>
        <div className="mr-1">{t("releaseDate")}</div>
        <div className="text-orange-500">{props.releaseDate}</div>
      </DisplayContainer>
      <DisplayContainer viewMode={props.viewMode}>
        <div className="mr-1">{t("rating")}</div>
        <div className="text-orange-500">{props.voteAverage}</div>
      </DisplayContainer>
    </>
  );
}
