import React, { useState } from "react";
import { PersonData } from "../data/UserData";
import MainBoxContent from "./MainBoxContent";

const MainBox = () => {
  const [data, setData] = useState(PersonData);
  return (
    <div>
      <div className="grid md:grid-cols-6 gap-6 border-t-2 border-[#323756] pt-3 w-[80%] lg:w-[90%] mx-auto text-[#ACBDC8] text-xs font-sans grid-cols-4 max-[400px]:grid-cols-3 max-[400px]:pl-4">
        <h1 className="justify-self-start uppercase">Created At</h1>
        <h1 className="justify-self-start">AMOUNT</h1>
        <h1 className="justify-self-start  max-[400px]:hidden">STATUS</h1>
        <h1 className="justify-self-start hidden md:block" >CONTACT</h1>
        <h1 className="justify-self-start hidden md:block">CREATED BY</h1>
        <h1 className="justify-self-start">
          UTR
          <span className=" rounded-full text-black bg-gray-500 text-xs font-bold px-1">
            ?
          </span>
        </h1>
      </div>
      <div className="flex flex-col border-b-2 border-[#323756] pb-3 w-[80%] lg:w-[90%]  mx-auto ">
        {data && data.map((e) => <MainBoxContent key={e.Contact} data={e} />)}
      </div>
      <div className="flex gap-5 float-right mr-20 mt-5 rounded">
        <select className="px-4 py-1 bg-[#161D40] text-white" >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span className="text-white">rows/page</span>
      </div>
    </div>
  );
};

export default MainBox;
