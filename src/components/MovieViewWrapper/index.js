import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { getMovieById } from "utils";
import BlockMovieView from "../BlockMovieView";
import ListMovieView from "../ListMovieView";

export default function MovieViewWrapper(props) {
  const isActive = !props.isViewed;
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    const lng = i18n.language === "en" ? "en-US" : "ru";
    getMovieById(props.movieId, lng).then((data) => setMovieInfo(data));
  }, [i18n.language]);
  if (!movieInfo) return <></>;
  return props.viewMode === "block" ? (
    <BlockMovieView
      onClickDelete={() => props.onClickDelete()}
      movieInfo={movieInfo}
      isActive={isActive}
      onClickConfirm={() => props.onClickConfirm()}
    />
  ) : (
    <ListMovieView
      onClickDelete={() => props.onClickDelete()}
      movieInfo={movieInfo}
      isActive={isActive}
      onClickConfirm={() => props.onClickConfirm()}
    />
  );
}
