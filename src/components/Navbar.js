import React from "react";
import UnderFotterBar from "./UnderFotterBar";
import { AddPerson, Arrow, Search, Speaker } from "../icons/icons";
import MovingNavbar from "./MovingNavbar";
import Sidebar from "./MovingNavbar";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#080D29] w-full flex justify-between h-20 p-4 items-center text-white relative ">
        <Sidebar />
        
        <div className="flex gap-7 items-center text-xs font-normal pl-12 flex-wrap">
          <span className="flex gap-4 items-center">
            <Arrow />
            <span>Payouts</span>
          </span>
          <span className="text-xl">/</span>
          <a href="#" className="p-1 px-2 bg-blue-700 rounded mb-1">
            Single
          </a>
          <a href="#" className="flex gap-2">
            Bulk<span className="bg-green-500 rounded-lg px-1 ">NEW</span>
          </a>
          <a href="#">Tally</a>
          <a href="#">Payout Links</a>
        </div>
        <div className="bg-yellow-500 text-black mt-[-57px] p-2 rounded-md mr-[110px] text-xs font-semibold hidden lg:block">
          GO BACK TO ONBOARDING
        </div>
        <div className=" gap-3 flex-wrap hidden md:flex">
          <select className="bg-blue-950 border-2 border-blue-600 cursor-pointer p-1 text-blue-600 outline-none">
            <option value=" Payout 1"> Payout 1</option>
            <option value=" Payout 2"> Payout 2</option>
            <option value=" Payout 3"> Payout 3</option>
          </select>
          <p>
            <Search />
          </p>
          <p>
            <Speaker />
          </p>
          <p>
            <AddPerson />
          </p>
        </div>
      
      </div>
      <UnderFotterBar />
    </>
  );
};

export default Navbar;
