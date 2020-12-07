import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { getMovieById } from "utils";
import ServiceButtons from "components/ServiceButtons";
import MovieView from "components/MovieView";

export default function MovieViewWrapper(props) {
  const isActive = !props.isViewed;
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    const lng = i18n.language === "en" ? "en-US" : "ru";
    getMovieById(props.movieId, lng).then((data) => setMovieInfo(data));
  }, [i18n.language]);
  if (!movieInfo) return <></>;
  return (
    <MovieView
      movieInfo={movieInfo}
      viewMode={props.viewMode}
      isActive={isActive}
    >
      <ServiceButtons
        value={movieInfo.id}
        onClickConfirm={() => props.onClickConfirm()}
        onClickDelete={() => props.onClickDelete()}
      />
    </MovieView>
  );
}
