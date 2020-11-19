import React from "react";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation("mainPage");
  return <h1>{t("main")}</h1>;
}
