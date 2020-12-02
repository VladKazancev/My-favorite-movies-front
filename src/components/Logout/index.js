import React from "react";
import { LOGOUT } from "./consts";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  const handleClickLogout = () => {
    localStorage.removeItem("currentUser");
    history.push("/");
  };
  return (
    <div className="flex items-center">
      <div className=" text-purple-100 text-xl mr-4">
        {localStorage.getItem("currentUser")}
      </div>
      <img
        onClick={handleClickLogout}
        src={LOGOUT}
        className="iconHover w-35px"
        alt="logout"
      />
    </div>
  );
}
