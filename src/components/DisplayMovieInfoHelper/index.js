import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

export default function DisplayMovieInfoHelper(props) {
  const { t } = useTranslation("moviesInfo");
  const blocksClassname = classnames("flex", "mr-1", {
    "mb-2": props.viewMode === "list",
  });
  return (
    <>
      <div className={blocksClassname}>
        <div className="mr-1">{t("releaseDate")}</div>
        <div className="text-orange-500">{props.releaseDate}</div>
      </div>
      <div className={blocksClassname}>
        <div className="mr-1">{t("rating")}</div>
        <div className="text-orange-500">{props.voteAverage}</div>
      </div>
    </>
  );
}
