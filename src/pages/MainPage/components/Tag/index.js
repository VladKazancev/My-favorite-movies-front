import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import { getFavorite, setFavoriteGenres } from "../../../../utils";

export default function Tag({ text }) {
  const [isActive, setActivity] = useState(
    getFavorite("favoriteGenres").includes(text)
  );
  const { t } = useTranslation("genres");
  const handleClickTag = (e) => {
    setFavoriteGenres(e.target.value, isActive);
    setActivity(!isActive);
  };
  let className = classnames(
    "border-2",
    "text-xl",
    "font-semibold",
    "px-3",
    "py-1",
    "m-1",
    "rounded-full",
    "focus:outline-none",
    "duration-500",
    "transition-colors",
    "hover:shadow-ring"
  );
  if (isActive) className += " bg-orange-400 border-orange-400 text-gray-800";
  else className += " text-orangev2-200 border-orangev2-100";
  return (
    <button
      value={text}
      onClick={(e) => handleClickTag(e)}
      className={className}
    >
      {t(text)}
    </button>
  );
}
