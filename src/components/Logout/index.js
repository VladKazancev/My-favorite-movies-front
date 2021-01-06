import React from "react";
import { useApolloClient } from "@apollo/client";
import { LOGOUT } from "./consts";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER } from "api/queries/user";

export default function Logout() {
  const history = useHistory();
  const client = useApolloClient();
  const { loading, data } = useQuery(GET_USER);
  const handleClickLogout = () => {
    client.clearStore().then(() => {
      localStorage.removeItem("JWT");
      history.push("/");
    });
  };
  if (loading) return null;
  return (
    <div className="flex items-center">
      <div className=" text-purple-100 text-xl mr-4">{data.user.email}</div>
      <img
        onClick={handleClickLogout}
        src={LOGOUT}
        className="iconHover w-35px"
        alt="logout"
      />
    </div>
  );
}
