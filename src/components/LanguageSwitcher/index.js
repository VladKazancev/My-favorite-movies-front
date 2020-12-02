import React, { useState } from "react";
import i18n from "i18next";
import { FLAG_RU, FLAG_UK } from "./consts";

export default function LanguageSwitcher() {
  const [lng, setLng] = useState(i18n.language);
  const switchLanguage = () => {
    let currentValue = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(currentValue);
    setLng(currentValue);
  };
  return (
    <img
      onClick={switchLanguage}
      src={lng === "ru" ? FLAG_UK : FLAG_RU}
      alt="flag"
      className="iconHover w-45px"
    />
  );
}
