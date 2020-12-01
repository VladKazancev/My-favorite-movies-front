import React from "react";
import { logout } from "../../consts";
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
        src={logout}
        width="35px"
        className="iconHover"
        alt="logout"
      />
    </div>
  );
}
