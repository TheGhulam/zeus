import React from "react";
import Logo from "./svg/Logo";

function Navigation() {
  return (
    <nav className=" p-5 backdrop-blur-md fixed w-[642px] top-0 left-0 z-10 font-headline text-white">
      <div className="flex items-center">
        <Logo />
        <div className="pl-10">
          <ul className="flex justify-around border-b-[1px] border-[#583922] pb-3 ">
            <li>Home</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;