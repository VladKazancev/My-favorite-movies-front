import React from "react";
import { DELETE_MOVIE, CONFIRM_MOVIE } from "./consts";

export default function ServiceButtons(props) {
  const serviceButtonsClassname =
    "bg-blackv2-main hover:shadow-service rounded-lg py-1 w-45 flex justify-center focus:outline-none";
  return (
    <div className="flex justify-between w-11/12 mt-3 mb-4">
      <button
        value={props.value}
        onClick={props.onClickConfirm()}
        className={serviceButtonsClassname}
      >
        <img className="w-35px" alt="confirm" src={CONFIRM_MOVIE} />
      </button>
      <button
        value={props.value}
        onClick={props.onClickDelete()}
        className={serviceButtonsClassname}
      >
        <img className="w-30px" alt="delete" src={DELETE_MOVIE} />
      </button>
    </div>
  );
}
