import React from "react";

const MainBoxContent = ({ data }) => {
  return (
    <div className=" grid md:grid-cols-6 gap-6 whitespace-pre-line font-sans text-[#E7E8EC] h-fit bg-[#1D2345] grid-cols-4 text-xs max-[400px]:grid-cols-3 max-[400px]:pl-4">
      <h1 className="justify-self-start my-3">{data.CreatedAt}</h1>
      <h1 className="justify-self-start my-3">
        <span className="text-[#8F8582] text-xs">₹</span>
        {data.Amount}
        <span className="text-[#8F8582] text-xs">.00</span>
      </h1>
      <h1 className="justify-self-start p-1 text-[#DBB153] bg-[#403539] my-3 rounded-full text-xs font-semibold h-6 max-[400px]:hidden">
        {data.Status}
      </h1>
      <h1 className="justify-self-start my-3 ">{data.Contact}</h1>
      <h1 className="justify-self-start my-3 text-[#5F85A4] hidden md:block">{data.CreatedBy}</h1>
      <h1 className="justify-self-start my-3 hidden md:block">{data.UTR}</h1>
    </div>
  );
};

export default MainBoxContent;
