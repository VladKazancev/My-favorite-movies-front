import React from "react";
import classnames from "classnames";
import ServiceButtons from "../ServiceButtons";
import ListViewScrollbarContainer from "../ListViewScrollbarContainer";
import { ageLimit, imageURL } from "../../consts";

export default function ListMovieView(props) {
  const [description, imageSrc] = [
    props.movieInfo,
    imageURL + props.movieInfo.poster_path,
  ];
  const containerClassname = classnames(
    "flex",
    "flex-row",
    "items-center",
    "bg-blackv2-main",
    "rounded-xl",
    "mt-2",
    "mx-2",
    "p-2",
    "transition",
    "w-full",
    "duration-300",
    { "hover:shadow-movie": props.isActive },
    { "opacity-45": !props.isActive },
    { disabled: !props.isActive }
  );
  const ageLimitImageClassname = classnames("absolute", "m-2", {
    hidden: !description.adult,
  });
  return (
    <div className="flex flex-col justify-center items-center w-full px-2">
      <div className={containerClassname}>
        <div className="flex justify-end relative w-64">
          <img className="border border-white rounded-lg" src={imageSrc} />
          <img width="50px" className={ageLimitImageClassname} src={ageLimit} />
        </div>
        <ListViewScrollbarContainer description={description} />
      </div>
      <ServiceButtons
        value={description.id}
        onClickConfirm={() => props.onClickConfirm()}
        onClickDelete={() => props.onClickDelete()}
      />
    </div>
  );
}
