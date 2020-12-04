import React from "react";
import ServiceButtons from "../ServiceButtons";
import DisplayMovieInfoHelper from "../DisplayMovieInfoHelper";
import { IMAGE_URL } from "consts";
import BlockMovieViewContainer from "./styled";
export default function BlockMovieView(props) {
  const [description, imageSrc] = [
    props.movieInfo,
    IMAGE_URL + props.movieInfo.poster_path,
  ];
  return (
    <div className="flex flex-col items-center mx-4 mt-3">
      <BlockMovieViewContainer isActive={props.isActive}>
        <img className="rounded-xl" alt="filmImage" src={imageSrc} />
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
      </BlockMovieViewContainer>
      <ServiceButtons
        value={description.id}
        onClickConfirm={() => props.onClickConfirm()}
        onClickDelete={() => props.onClickDelete()}
      />
    </div>
  );
}
