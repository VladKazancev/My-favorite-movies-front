import React from "react";
import { useTranslation } from "react-i18next";
import useGenres from "components/hooks/useGenres";
import Tag from "components/Tag";

export default function TagsCloud() {
  const genres = useGenres();
  const { t } = useTranslation("mainPage");
  return (
    <div className="flex flex-col items-center w-2/3 mt-8">
      <div className="font-semibold uppercase text-orange-400 text-xl mb-5">
        {t("tagsCloudTitle")}
      </div>
      <div className="flex flex-wrap justify-center rounded-2xl ">
        {Object.keys(genres).map((current, index) => (
          <Tag key={index} id={current} text={genres[current]} />
        ))}
      </div>
    </div>
  );
}
