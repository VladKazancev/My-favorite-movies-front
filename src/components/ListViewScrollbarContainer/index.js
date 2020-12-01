import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";
import DisplayMovieInfoHelper from "../DisplayMovieInfoHelper";
import { ucFirst } from "../../utils";

export default function ListViewScrollbarContainer(props) {
  const { t } = useTranslation("moviesInfo");
  const description = props.description;
  const genres = description.genres.map((current, index) => (
    <div
      key={index}
      className="px-3 py-1 m-1 rounded-full bg-orange-400 text-gray-800"
    >
      {ucFirst(current.name)}
    </div>
  ));
  const productionCompaines = description.production_companies
    .map((current) => current.name)
    .join(", ");
  return (
    <Scrollbar>
      <div className="flex text-beigev2 font-semibold text-lg flex-col items-center py-3 px-8">
        <div align="center" className="text-orangev2-200 uppercase mb-2">
          {description.title}
        </div>
        <div className="flex justify-center flex-wrap mb-2">{genres}</div>
        <DisplayMovieInfoHelper
          releaseDate={description.release_date}
          voteAverage={description.vote_average}
          viewMode="list"
        />
        {productionCompaines ? (
          <p align="justify" className="redLine mb-2">
            {t("production_companies")}
            <span className="text-orange-500 ml-1">{productionCompaines}</span>
          </p>
        ) : (
          <></>
        )}
        <p className="mb-2 redLine" align="justify">
          {description.overview}
        </p>
      </div>
    </Scrollbar>
  );
}
