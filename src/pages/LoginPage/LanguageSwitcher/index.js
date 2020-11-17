import React from "react";
import i18n from "i18next";

export default function LanguageSwitcher() {
  const switchLanguage = () => {
    let currentValue = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(currentValue);
  };
  return (
    <img
      onClick={switchLanguage}
      src={
        i18n.language === "ru" ? "./images/flagUK.svg" : "./images/flagRU.svg"
      }
      width="45px"
      alt="flag"
      className="transform transition-transform duration-300 hover:scale-90 focus:outline-none"
    />
  );
}
