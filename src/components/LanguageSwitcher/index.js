import React, { useState } from "react";
import i18n from "i18next";
import { flagRU, flagUK } from "../../consts";

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
      src={lng === "ru" ? flagUK : flagRU}
      width="45px"
      alt="flag"
      className="iconHover"
    />
  );
}
