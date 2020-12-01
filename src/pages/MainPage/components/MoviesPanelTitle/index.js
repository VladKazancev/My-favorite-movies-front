import React from "react";
import i18n from "i18next";
import classnames from "classnames";
import ToggleButtons from "../../../../components/ToggleButtons";

export default function MoviesPanelTitle(props) {
  let addButtonClassname = classnames(
    "bg-beigev2",
    "py-five",
    "text-lg",
    "rounded-lg",
    "font-semibold",
    "text-gray-800",
    "hover:shadow-add",
    "focus:outline-none"
  );
  addButtonClassname += i18n.language === "en" ? " px-8" : " px-3";
  return (
    <div className="flex items-baseline justify-between w-10/12 mb-5">
      <div className="font-semibold uppercase text-beigev2 text-xl">
        {props.title}
      </div>
      <div className="flex w-1/3 justify-around">
        <button className={addButtonClassname}>{props.buttonText}</button>
        <ToggleButtons
          viewMode={props.viewMode}
          onClickToggleButton={() => props.onClickToggleButton()}
        />
      </div>
    </div>
  );
}
