import { useState } from "react";

export default function useViewMode() {
  const [viewMode, setViewMode] = useState("block");
  const customSetViewMode = (e) => {
    const name = e.target.name;
    if (viewMode !== name) setViewMode(name);
  };
  return [viewMode, customSetViewMode];
}
