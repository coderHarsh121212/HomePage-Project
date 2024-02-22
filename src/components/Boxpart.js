import React from "react";
import MainBox from "./MainBox";
import { Down, Download, Options, Reload } from "../icons/icons";

const Boxpart = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex justify-between lg:w-[90%] mx-auto py-2 flex-wrap flex-col lg:flex-row">
        <div className="flex gap-2 items-center flex-wrap flex-col sm:flex-row">
          <input type="checkbox" className="accent-blue-500"></input>
          <h1 className="text-white">Showing 1-5 payouts •</h1>
          <span className="text-[#BB9B8D] text-sm">Sort by</span>
          <select className="bg-transparent border-none cursor-pointer p-1 text-[#5FB2F9] outline-none">
            <option value=" Payout 1"> Payout 1</option>
            <option value=" Payout 2"> Payout 2</option>
            <option value=" Payout 3"> Payout 3</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Reload />
          </div>
          <div>
            <Options />
          </div>
          <div className="border-2 border-[#59A0F7] p-1 text-[#59A0F7] rounded px-2 ">
            <Down />
            Export
          </div>
          <button className="border-2 border-blue-600 p-1 text-white bg-[#2A86F3] rounded px-2 flex gap-4">
            PAYOUT<span className="border-l-2 border-gray-500 px-2">^</span>
          </button>
        </div>
      </div>
      <div></div>
      <MainBox />
    </div>
  );
};

export default Boxpart;
