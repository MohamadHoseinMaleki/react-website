import React from "react";
import logo from "../image/logo.png";
import NavigationMenuDemo from "./ProfileMenu";

const Header = () => {
  return (
    <header className="grid grid-cols-4 gap-4 h-16 border-b-2 border-gray-300">
      <div className="col-span-4 lg:col-span-1">
        <div className="flex items-center pl-6 lg:pl-10 h-full">
          <img className="h-10 lg:h-16" src={logo} alt="Logo" />
          <span className="lg:text-2xl py-4 ml-2 font-bold">Mobopak</span>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2"></div>
      <div className="col-span-4 lg:col-span-1">
        <NavigationMenuDemo />
      </div>
    </header>
  );
};

export default Header;
