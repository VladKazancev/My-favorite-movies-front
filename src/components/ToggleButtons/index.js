import React from "react";
import ToggleButtonsContainer from "./styled";
import { TABLE_VIEW, LIST_VIEW } from "./consts";

export default function ToggleButtons(props) {
  return (
    <ToggleButtonsContainer isBlockView={props.isBlockView}>
      <img
        name="block"
        alt="tableView"
        onClick={(e) => props.onClickToggleButton(true)}
        src={TABLE_VIEW}
      />
      <img
        name="list"
        alt="listView"
        onClick={(e) => props.onClickToggleButton(false)}
        src={LIST_VIEW}
      />
    </ToggleButtonsContainer>
  );
}
