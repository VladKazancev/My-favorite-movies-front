import React from "react";
import i18n from "i18next";
import { useHistory } from "react-router-dom";
import ToggleButtons from "components/ToggleButtons";
import AddButton from "./styled";
export default function MoviesPanelTitle(props) {
  const history = useHistory();
  return (
    <div className="flex items-baseline justify-between w-10/12 mb-5">
      <div className="font-semibold uppercase text-beigev2 text-xl">
        {props.title}
      </div>
      <div className="flex w-1/3 justify-around">
        <AddButton onClick={() => history.push("/search")} lng={i18n.language}>
          {props.buttonText}
        </AddButton>
        <ToggleButtons
          viewMode={props.viewMode}
          onClickToggleButton={props.onClickToggleButton}
        />
      </div>
    </div>
  );
}
