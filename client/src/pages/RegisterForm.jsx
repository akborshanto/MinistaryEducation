import React from "react";

const RegisterForm = () => {
  const handleSubmint = (e) => {
    console.log("df");
  };
  return (
    <div className=" border border-black w-3/4 mx-auto my-7">
      <div className="flex  justify-center  items-center p-8 ">
        <form action="" onSubmit={handleSubmint}>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Examination
            </label>
            <span className="text-2xl font-bold">:</span>
            <select className="    textfield05  ">
              <option disabled selected>
                SSC/Dakhil/Equivalent
              </option>
              <option>SSC/Dakhil/Equivalent</option>
              <option>JSC/JDC</option>
              <option>SSC/DAKHIL</option>
              <option>SSC(vocationl)</option>
              <option>HSC/ALIM</option>
              <option>HSC(vocationl)</option>
              <option>HSC(BM)</option>
              <option>Diploma in Commerce</option>
              <option>Diploma in Business Studies</option>
            </select>
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[22px] ">
              Year 
            </label>
            <span className=" font-bold">:</span>
            <select className="    textfield05  ">
              <option className="font-bold  " disabled selected>Select One </option>
              {year.reverse().map((yer) => (
                <option>{yer.year} </option>
              ))}
            </select>
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Board
            </label>
            <span className="mx-6">:</span>
            <select className="    textfield05 ">
              <option className="font-bold " disabled selected>Select One </option>
              {board.map((board) => (
                <option className=" ">{board.board} </option>
              ))}
            </select>
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Roll 
            </label>
            <span className="mx-6">:</span>
            <input type="text" className="textfield06 " />
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Reg: No 
            </label>
            <p className="mx-6">:</p>
            <input type="text" className="textfield06 " />
          </div>

          {/* input */}
          <div className="flex  justify-between my-4">
          <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
          {" "}
          6 + 8 
        </label>
          <p className="mx-6">=</p>
          <div>
          </div>
  
            <input type="text" className="textfield06 " />
          </div>
          {/* buttton */}
          <div className="text-end">
          <button className=" bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 mx-4">
          Reset
        </button>
        <button className=" bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 ">
          Submit
        </button>
          </div>
        
          
        </form>
      </div>
    </div>
  );
};

const year = [
  { year: 1996 },
  { year: 1997 },
  { year: 1998 },

  { year: 1999 },
  { year: 2000 },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
  { year: 2023 },
  { year: 2024 },
];
const board = [
  { board: "Dhaka" },
  { board: "Chittagong" },
  { board: "Comilla" },
  { board: "DinajPur" },
  { board: "Jessore" },
  { board: "MymenSingh" },
  { board: "Sylhet" },
  { board: "Rajshashi" },
  { board: "Sylhet" },
  { board: "Barisa" },
  { board: "Madrashah" },
  { board: "Technical" },
  { board: "DIBS(DHAKA)" },
];
export default RegisterForm;
