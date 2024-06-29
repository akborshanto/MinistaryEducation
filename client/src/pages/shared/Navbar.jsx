import React from "react";
import stamp from "../../assets/bd_logo.png";
import banner from "../../assets/banner_flag.jpg";
const Navbar = () => {
  return (
    <div className="flex     bg-headerGray rounded-lg items-center jsutify-center   ">
      <div className=" mx-8">
        <img src={stamp} alt="stamp"  className="w-[200px]  h-auto "/>
      </div>

      <div className="bg-headerGreen w-full rounded-lg ">
        <div className="flex  items-center border-b   justify-between ">
          <h1 className="text-green font-bold text-3xl  w-full px-5 ">Ministry of Education</h1>
          <img src={banner} alt="Banner"  className="w-1/2"/>
        </div>
        <div className="px-5  p-3 border-b ">
          <h1 className="text-white font-bold text-4xl">Intermediate and Secondary Education Boards  <br />Bangladesh</h1>
        </div>
        <div className="bg-headerb text-end text-white text-2xl p-2">
          <h2>Official Website of Education Board</h2>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
