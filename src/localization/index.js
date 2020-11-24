import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const [en, ru] = [require("./en.json"), require("./ru.json")];
i18n.use(initReactI18next).init({
  resources: {
    en: en,
    ru: ru,
  },
  lng: "ru",
});
