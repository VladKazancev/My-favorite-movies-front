import React from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import Input from "./Input";
import Error from "./Error";
import Submit from "./Submit";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const onSubmit = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.email === email);
    if (!user) return { [FORM_ERROR]: "unknownUser" };
    if (user.password !== password) return { [FORM_ERROR]: "wrongPassword" };
    history.push("/main");
  };
  const [{ t }, history] = [useTranslation("loginPage"), useHistory()];
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blackv2-start to-blackv2-end">
      <div className="p-16 bg-blackv2-form border border-gray-800 shadow-2xl rounded-2xl">
        <img className="mb-5" src="./images/Logo.svg" alt="Logo" />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitError }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              {submitError && <Error text={t(submitError)} />}
              <Field
                name="email"
                placeholder={t("emailHolder")}
                component={Input}
              />
              <Field
                name="password"
                placeholder={t("passwordHolder")}
                component={Input}
              />
              <div className="flex justify-around w-full px-4 mt-6">
                <LanguageSwitcher />
                <Submit text={t("submitLabel")} />
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}
