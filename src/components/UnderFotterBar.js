import React from "react";
import Boxpart from "./Boxpart";

const UnderFotterBar = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex justify-between bg-[#111739] text-blue-500 pl-16 flex-wrap">
        <div className="flex gap-4 p-4 items-center flex-wrap">
          <h1 className="text-white">Quick Filters :</h1>
          <div className="flex gap-2 p-1 px-2 bg-[#13234C] rounded-sm text-[#0B48C9] ">
            <input
              type="checkbox"
              className="accent-blue-500 rounded-full"
            ></input>
            <h1>All Payouts </h1>
          </div>
          <div className="flex gap-2 p-1 px-2">
            <input type="checkbox" className="accent-blue-500"></input>
            <h1>Scheduled for next 2 days</h1>
          </div>
          <div className="flex gap-2 p-1 px-2 rounded-sm bg-[#121D42]">
            <input type="checkbox"></input>
            <h1>Queued (RazorPayX A/c) </h1>
          </div>
        </div>
        <div className="flex items-center pr-5">
          <select className="bg-transparent cursor-pointer p-1 text-[#6F9ADC] outline-none">
            <option value=" Payout 1"> Payout 1</option>
            <option value=" Payout 2"> Payout 2</option>
            <option value=" Payout 3"> Payout 3</option>
          </select>
        </div>
      </div>
      <div className="w-[80%] mx-auto rounded-md bg-gray-500 flex p-3 my-2 gap-3 md:w-[90%] max-[400px]:w-[70%]">
        <span className="bg-[#977A03] text-black text-xs  text-center rounded-md h-6 w-16 p-1">
          TEST
        </span>
        <p className="text-xs md:text-sm">
          These are test payouts and do not affect the actual balance. They are
          used only for the purpose of integrating events
        </p>
        <a href="#" className="text-[#3D93F9] font-sans text-xs md:text-sm">
          Learn More
        </a>
      </div>
      <Boxpart />
    </div>
  );
};

export default UnderFotterBar;
