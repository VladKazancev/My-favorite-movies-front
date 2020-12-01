import React from "react";
import { deleteMovie, confirmMovie } from "../../consts";

export default function ServiceButtons(props) {
  const serviceButtonsClassname =
    "bg-blackv2-main hover:shadow-service rounded-lg py-1 w-45 flex justify-center focus:outline-none";
  return (
    <div className="flex justify-between w-11/12 my-3 ">
      <button
        value={props.value}
        onClick={props.onClickConfirm()}
        className={serviceButtonsClassname}
      >
        <img width="35px" src={confirmMovie} />
      </button>
      <button
        value={props.value}
        onClick={props.onClickDelete()}
        className={serviceButtonsClassname}
      >
        <img width="30px" src={deleteMovie} />
      </button>
    </div>
  );
}
