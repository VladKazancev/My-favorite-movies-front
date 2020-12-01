import React from "react";
import classnames from "classnames";
import ServiceButtons from "../ServiceButtons";
import DisplayMovieInfoHelper from "../DisplayMovieInfoHelper";
import { imageURL } from "../../consts";

export default function BlockMovieView(props) {
  const [description, imageSrc] = [
    props.movieInfo,
    imageURL + props.movieInfo.poster_path,
  ];
  const containerClassname = classnames(
    "w-64",
    "rounded-xl",
    "transition",
    "duration-300",
    "relative",
    "flex",
    "flex-col",
    "justify-end",
    { "hover:shadow-movie": props.isActive },
    { "opacity-45": !props.isActive }
  );
  return (
    <div className="flex flex-col items-center mx-4 mt-3">
      <div className={containerClassname}>
        <img className="rounded-xl" src={imageSrc} />
        <div className="absolute flex flex-col items-center text-lg text-beigev2 font-semibold py-3 rounded-b-xl opacity-95 w-full bg-blackv2-main">
          <div
            align="center"
            className="uppercase w- flex-shrink text-base px-2 text-orangev2-100"
          >
            {description.title}
          </div>
          <DisplayMovieInfoHelper
            releaseDate={description.release_date}
            voteAverage={description.vote_average}
            viewMode="block"
          />
        </div>
      </div>
      <ServiceButtons
        value={description.id}
        onClickConfirm={() => props.onClickConfirm()}
        onClickDelete={() => props.onClickDelete()}
      />
    </div>
  );
}
