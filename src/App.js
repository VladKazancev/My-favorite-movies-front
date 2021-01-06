import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import SearchPage from "pages/SearchPage";
import "localization";
import "styles/tailwindcss.css";
import { htmlLocalization } from "utils";
import { useTranslation } from "react-i18next";

const client = apolloClient;

export default function App() {
  const { t } = useTranslation("other");
  htmlLocalization(t);
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
