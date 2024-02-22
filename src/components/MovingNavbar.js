import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { FiHome, FiArrowUpRight } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { MdOutlineHome } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { FaSuitcaseRolling } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { NavIcon } from "../icons/icons";
import logo from "./logo.png";
import logo1 from "./logo1.png";
import playstore from "./playstore.png";
import iosimg from "./ios.png";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`h-screen fixed top-0 left-0 flex flex-col gap-10 rounded0 py-5  cursor-pointer ${
        open ? "bg-[#242A4A]" : "bg-[#080D29]"
      } text-[#989BAC]`}
    >
      {open ? (
        <>
          <div className="flex flex-col gap-4 font-sans px-3">
            <div className="w-56 h-16 flex justify-self-start">
              <img src={logo} className="ml-[-14px]"></img>
            </div>
            <div className="flex gap-3 items-center mt-[-10px] hover:bg-[#383E5A] p-1 rounded">
              <FiHome />
              <h1>Home</h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <FiArrowUpRight />
              <h1>
                Payouts
                <span className="bg-green-500 rounded-lg px-1 text-white text-xs ml-3">
                  NEW
                </span>
              </h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <GrNotes />
              <h1>Account Statement</h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <GoPerson />
              <h1>Contacts</h1>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 px-3">
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <MdOutlineHome />
              <h1>Vendor Payments</h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <IoMdUnlock />
              <h1>Tax Payments</h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <BsFillSendFill />
              <h1>Payout Links</h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <FaSuitcaseRolling />
              <h1>Payroll</h1>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <TbReportSearch />
              <h1>Report</h1>
            </div>
          </div>
          <div className="absolute flex bottom-2 items-center  gap-1 text-sm px-2">
            <p>Get RazorPayX mobile app</p>
            <img src={playstore} className="w-5 h-5"></img>
            <img src={iosimg} className="w-5 h-5"></img>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-20 rounded0 items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-10 h-10 bg-transparent">
              <img src={logo1} alt="logo-half"></img>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <FiHome />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <FiArrowUpRight />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <GrNotes />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <GoPerson />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <MdOutlineHome />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <IoMdUnlock />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <BsFillSendFill />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <FaSuitcaseRolling />
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <TbReportSearch />
            </div>
          </div>
        </div>
      )}
      <div
        className={`absolute  rounded-full bg-black text-white p-1 ${
          open ? "right-[-15px] top-12" : "left-8 top-12"
        }`}
        onClick={() => setOpen(!open)}
      >
        <NavIcon />
      </div>
    </div>
  );
};

export default Sidebar;
