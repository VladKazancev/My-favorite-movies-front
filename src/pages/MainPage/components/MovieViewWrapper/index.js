import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { getMovieById } from "utils";
import ServiceButtons from "components/ServiceButtons";
import MovieView from "components/MovieView";

export default function MovieViewWrapper(props) {
  const { isViewed, isBlockView, movieId } = props;
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    const lng = i18n.language === "en" ? "en-US" : "ru";
    getMovieById(movieId, lng).then((data) => setMovieInfo(data));
  }, [i18n.language]);
  if (!movieInfo) return null;
  return (
    <MovieView
      movieInfo={movieInfo}
      isBlockView={isBlockView}
      isActive={!isViewed}
    >
      <ServiceButtons
        value={movieInfo.id}
        onClickConfirm={() => props.onClickConfirm()}
        onClickDelete={() => props.onClickDelete()}
      />
    </MovieView>
  );
}
