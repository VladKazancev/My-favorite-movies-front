import React from "react";
import ServiceButtons from "../ServiceButtons";
import ListMovieViewContainer from "./styled";
import ListViewScrollbarContainer from "../ListViewScrollbarContainer";
import { IMAGE_URL } from "consts";
import { AGE_LIMIT } from "./consts";

export default function ListMovieView(props) {
  const [description, imageSrc] = [
    props.movieInfo,
    IMAGE_URL + props.movieInfo.poster_path,
  ];
  return (
    <div className="flex flex-col items-center w-full px-2">
      <ListMovieViewContainer
        isActive={props.isActive}
        adultOnly={description.adult}
      >
        <div className="flex justify-end relative w-64">
          <img
            className="border border-white rounded-lg"
            alt="filmImage"
            src={imageSrc}
          />
          <img name="ageLimit" alt="ageLimit" src={AGE_LIMIT} />
        </div>
        <ListViewScrollbarContainer description={description} />
      </ListMovieViewContainer>
      <ServiceButtons
        value={description.id}
        onClickConfirm={() => props.onClickConfirm()}
        onClickDelete={() => props.onClickDelete()}
      />
    </div>
  );
}
