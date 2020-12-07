import React from "react";
import BlockMovieView from "components/BlockMovieView";
import ListMovieView from "components/ListMovieView";

export default function MovieView(props) {
  const [movieInfo, isActive] = [props.movieInfo, props.isActive];
  if (!movieInfo.poster_path) return <></>;
  return props.viewMode === "block" ? (
    <BlockMovieView movieInfo={movieInfo} isActive={isActive}>
      {props.children}
    </BlockMovieView>
  ) : (
    <ListMovieView movieInfo={movieInfo} isActive={isActive}>
      {props.children}
    </ListMovieView>
  );
}
