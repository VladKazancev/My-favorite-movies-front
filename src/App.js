import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./localization";
import "./styles/tailwindcss.css";

export default function App() {
  if (!localStorage.getItem("users"))
    localStorage.setItem(
      "users",
      JSON.stringify([
        { email: "Kazancev@yandex.ru", password: "password" },
        { email: "Database@mail.ru", password: "password1" },
      ])
    );
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}
