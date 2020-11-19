import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./localization";
import "./styles/tailwindcss.css";
import { addUsers, htmlLocalization } from "./utils";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation("other");
  addUsers();
  htmlLocalization(t);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}
