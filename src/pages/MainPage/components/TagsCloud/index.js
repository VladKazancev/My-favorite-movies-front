import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getGenres } from "utils";
import Tag from "../Tag";

export default function TagsCloud() {
  const [genres, setGenres] = useState([]);
  const { t } = useTranslation("mainPage");
  useEffect(() => {
    getGenres("en-US").then((data) => {
      const genresFromAPI = data.genres.map((current) => current.name);
      setGenres(genresFromAPI);
    });
  }, []);
  return (
    <div className="flex flex-col items-center w-2/3 mt-8">
      <div className="font-semibold uppercase text-orange-400 text-xl mb-5">
        {t("tagsCloudTitle")}
      </div>
      <div className="flex flex-wrap justify-center rounded-2xl ">
        {genres.map((current, index) => (
          <Tag key={index} text={current} />
        ))}
      </div>
    </div>
  );
}
