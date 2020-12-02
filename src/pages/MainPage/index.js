import React from "react";
import Header from "components/Header";
import TagsCloud from "./components/TagsCloud";
import MoviesPanel from "./components/MoviesPanel";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center h-screen overflow-auto bg-blackv2-main">
      <Header />
      <TagsCloud />
      <MoviesPanel />
    </div>
  );
}
