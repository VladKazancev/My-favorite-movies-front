import React from "react";
import ToggleButtonsContainer from "./styled";
import { TABLE_VIEW, LIST_VIEW } from "./consts";

export default function ToggleButtons(props) {
  return (
    <ToggleButtonsContainer viewMode={props.viewMode}>
      <img
        name="block"
        alt="tableView"
        onClick={props.onClickToggleButton}
        src={TABLE_VIEW}
      />
      <img
        name="list"
        alt="listView"
        onClick={props.onClickToggleButton}
        src={LIST_VIEW}
      />
    </ToggleButtonsContainer>
  );
}
