import { stringify } from "postcss";
import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

const RegisterForm = () => {
  const [userNumber, setUserNumber] = useState();
  const [random1, setRandom1] = useState(null);
  const [random2, setRandom2] = useState(null);
  const [sum, setSumb] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const radomNubmer2 = Math.ceil(Math.random() * 5) + 1;
    setRandom1(randomNumber);
    setRandom2(radomNubmer2);
  }, []);

  const handleSubmint = (e) => {
    e.preventDefault();
    const form = e.target;

    const examination = form.examination.value;
    const board = form.board.value;
    const year = form.year.value;
    const roll = form.roll.value;
    const registration = form.registration.value;
    const addition = form.addition.value;

    /* random nubmer */
    const totalRandom = random1 + random2;
    if (totalRandom == addition) {
      setError(" ");
    } else {
      setError("Give the Correct Number");
    }
    /* roll number */

    if (roll.trim() === "" || isNaN(roll)) {
      setError("Fill up roll input");
      return;
    } else if (roll <= 0) {
      setError("please enter a positive number");
      return;
    } else if (roll.length < 6) {
      setError("Give the alleast 6 roll number");
    }
    /* registraiotn */
    if (registration.trim() === "" || isNaN(registration)) {
      setError("Fill up Registration input");
      return;
    } else if (registration <= 0) {
      setError("please enter a positive number");
      return;
    } else if (registration.length < 10) {
      setError("Give the 10 Registrations nubmber");
      return;
    } else {
      setError("");
    }

    const studentInfo = {
      examination,
      year,
      board,
      roll,
      registration,
      addition,
    };
    
const stdentStorage=localStorage.setItem('studentInfo',JSON.stringify(studentInfo));
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
            <select className="    textfield05  " name="examination" required>
              {examination.map((examination) => (
                <option value={examination.examination}>
                  {examination.examination}
                </option>
              ))}
            </select>
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[22px] ">
              Year
            </label>
            <span className=" font-bold">:</span>
            <select className="    textfield05  " name="year" required>
              <option className="font-bold  " disabled selected>
                Select One{" "}
              </option>
              {year.reverse().map((yer) => (
                <option value={yer.year}>{yer.year} </option>
              ))}
            </select>
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Board
            </label>
            <span className="mx-6">:</span>
            <select className="    textfield05 " name="board" required>
              <option className="font-bold " disabled selected>
                Select One{" "}
              </option>
              {board.map((board) => (
                <option className=" " value={board.board}>
                  {board.board}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Roll
            </label>
            <span className="mx-6">:</span>
            <input type="text" className="textfield06 " name="roll" required />
          </div>
          <div className="flex  justify-between text-center my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              Reg: No
            </label>
            <p className="mx-6">:</p>
            <input
              type="text"
              className="textfield06 "
              name="registration"
              required
            />
          </div>

          {/* input */}
          <div className="flex  justify-between my-4">
            <label htmlFor="" className="text-blackBold font-bold text-[18px] ">
              {" "}
              {random1} + {random2}
            </label>
            <p className="mx-6">=</p>
            <div></div>

            <input
              type="text"
              className="textfield06 "
              name="addition"
              required
            />
          </div>
          {/* buttton */}
          <div className="text-end">
            <button className=" bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 mx-4">
              Reset
            </button>
            <button className=" bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 ">
              Submit
            </button>

            <Link to={"/resultCreate"} className="bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400">resultCreate</Link>

            {error && <h1 className="text-red-400">{error}</h1>}
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

const examination = [
  {
    examination: "SSC/Dakhil/Equivalent",
  },
  {
    examination: "JSC/JDC",
  },
  {
    examination: "SSC/DAKHIL",
  },
  {
    examination: "SSC(vocationl)",
  },
  {
    examination: "HSC/ALIM",
  },
  {
    examination: "HSC(vocationl)",
  },
  {
    examination: "HSC(BM)",
  },
  {
    examination: "Diploma in Commerce",
  },
  {
    examination: "Diploma in Business Studies",
  },
];

export default RegisterForm;
