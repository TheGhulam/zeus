import React from "react";
import Logo from "./svg/Logo";

function Navigation() {
  return (
    <nav className=" p-5 backdrop-blur-md fixed w-[642px] top-0 left-0 z-10 font-headline text-white">
      <div className="flex items-center w-full">
        {/* <Logo />
        <div className="w-full pl-10">
          <ul className="flex w-full justify-around border-b-[1px] border-[#583922] pb-3 ">
            <li>Home</li>
            <li>Facts</li>
            <li>Content</li>
            <li>Design</li>
            <li>Love</li>
          </ul>
        </div> */}
        <h1 className="text-2xl">
          Syed Muhammad Ibad Asim
        </h1>
      </div>
    </nav>
  );
}

export default Navigation;