import React from "react";
import { tableView, listView } from "../../consts";

export default function ToggleButtons(props) {
  const baseToggleClassname = "transform transition-scale duration-300";
  let [boxToggleClassname, listToggleClassname] = [
    baseToggleClassname + " ml-2 mr-4",
    baseToggleClassname,
  ];
  props.viewMode === "list"
    ? (boxToggleClassname += " scale-82")
    : (listToggleClassname += " scale-82");
  return (
    <div className="flex w-1/3 justify-between">
      <img
        name="block"
        onClick={props.onClickToggleButton()}
        className={boxToggleClassname}
        width="30px"
        src={tableView}
      />
      <img
        name="list"
        onClick={props.onClickToggleButton()}
        className={listToggleClassname}
        width="30px"
        src={listView}
      />
    </div>
  );
}
