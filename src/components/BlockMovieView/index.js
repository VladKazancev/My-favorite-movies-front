import React from "react";
import DisplayMovieInfoHelper from "../DisplayMovieInfoHelper";
import { IMAGE_URL } from "consts";
import BlockMovieViewContainer from "./styled";

export default function BlockMovieView(props) {
  const { movieInfo, isActive } = props;
  const imageSrc = IMAGE_URL + movieInfo.poster_path;
  return (
    <div className="flex flex-col items-center justify-center mx-4 mt-3">
      <BlockMovieViewContainer isActive={isActive}>
        <img className="rounded-xl" alt="filmImage" src={imageSrc} />
        <div className="absolute flex flex-col items-center text-lg text-beigev2 font-semibold py-3 rounded-b-xl opacity-95 w-full bg-blackv2-main">
          <div
            align="center"
            className="uppercase w- flex-shrink text-base px-2 text-orangev2-100"
          >
            {movieInfo.title}
          </div>
          <DisplayMovieInfoHelper
            releaseDate={movieInfo.release_date}
            voteAverage={movieInfo.vote_average}
            isBlockView
          />
        </div>
      </BlockMovieViewContainer>
      {props.children}
    </div>
  );
}
