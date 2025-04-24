import React from "react";

export const Nav = () => {
  return (
    <nav className="bg-neutral-300  ">
      <div className="mycontainer flex justify-around m-2 px-auto py-5 h-16 items-center text-white">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-violet-400"> &lt;</span>
          Pass
          <span className="text-violet-400">Gen/&gt;</span>
        </div>

        <button className="text-white bg-violet-400 my-5 rounded-full flex justify-between items-center ring-white ring-5 ">
          <img
            className="invert w-10 p-1"
            src="./github.svg"
            alt="github logo"
          />
          <a
            href="https://github.com/KishanWebDev/PassOP/blob/main/eslint.config.js"
            className="font-bold px-2"
          >
            GitHub
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
