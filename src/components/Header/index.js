import React from "react";
import { logoMain, logo } from "../../consts";
import LanguageSwitcher from "../LanguageSwitcher";
import Logout from "../Logout";

export default function Header() {
  return (
    <div className="flex justify-center bg-black rounded-b-lgHeader xl:rounded-b-header shadow-header border-black  w-full h-24">
      <div className="flex w-4/6 justify-between items-center">
        <img className="hidden w-1/2 xl:block" src={logoMain} alt="Logo" />
        <img className="w-56 xl:hidden" src={logo} alt="Logo" />
        <LanguageSwitcher />
        <Logout />
      </div>
    </div>
  );
}
