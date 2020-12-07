import { useState, useEffect } from "react";
import { getGenres } from "utils";

export default function useGenres(lng = "en-US") {
  const [genres, setGenres] = useState({});
  useEffect(() => {
    getGenres(lng).then((data) => {
      const genresFromAPI = {};
      data.genres.forEach((current) => {
        genresFromAPI[current.id] = current.name;
      });
      setGenres(genresFromAPI);
    });
  }, [lng]);
  return genres;
}
