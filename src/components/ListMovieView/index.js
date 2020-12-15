import React from "react";
import ListMovieViewContainer from "./styled";
import ListViewScrollbarContainer from "../ListViewScrollbarContainer";
import { IMAGE_URL } from "consts";
import { AGE_LIMIT } from "./consts";

export default function ListMovieView(props) {
  const { movieInfo, isActive } = props;
  const imageSrc = IMAGE_URL + movieInfo.poster_path;
  return (
    <div className="flex flex-col items-center w-full px-2">
      <ListMovieViewContainer isActive={isActive} adultOnly={movieInfo.adult}>
        <div className="flex justify-end relative w-64">
          <img
            className="border border-white rounded-lg"
            alt="filmImage"
            src={imageSrc}
          />
          <img name="ageLimit" alt="ageLimit" src={AGE_LIMIT} />
        </div>
        <ListViewScrollbarContainer description={movieInfo} />
      </ListMovieViewContainer>
      {props.children}
    </div>
  );
}
