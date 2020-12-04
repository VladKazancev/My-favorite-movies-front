import React from "react";

export default function Submit({ text }) {
  const submitClassName = [
    "uppercase",
    "font-bold",
    "text-xl",
    "text-white",
    "rounded-2xl",
    "w-8/12",
    "bg-orangev2-100",
    "transition-scale",
    "duration-300",
    "focus:outline-none",
    "hover:bg-orangev2-200",
    "transform",
    "hover:scale-95",
  ].join(" ");
  return (
    <button className={submitClassName} type="submit">
      {text}
    </button>
  );
}
