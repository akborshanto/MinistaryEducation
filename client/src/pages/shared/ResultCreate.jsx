import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResultCreate = () => {
  const [grade, setGrade] = useState("");
  const [sebject, setSubject] = useState("");
  const [currentGrade, setCurrengGrade] = useState("");
  const [error, setErrof] = useState("");

  const getStroage = JSON.parse(localStorage.getItem("studentInfo"));
  const { examination, year, board, roll, registration } = getStroage;

  /* hadle submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const father = form.father.value;

    const motherName = form.motherName.value;

    const institute = form.institute.value;
    const group = form.group.value;

    /*  */

    /* SUBJECT  */

    const bangla = form.bangla.value;

    const english = form.english.value;

    const group1 = form.group1.value;

    const gruop2 = form.group2.value;
    const group3 = form.group3.value;
//    / const ict = form.ict.value;
    const optional = form.optional.value;
const subject={bangla,
english,
group1,
gruop2,
group3,
optional}
console.log(gruop2)

    /* NUMVBBER */
    const banglaNum = form.banglaNum.value;

    const englishNum = form.englishNum.value;

    const gN1 = form.gN1.value;

    const gN2= form.gN2.value;
    const gN3 = form.gN3.value;

    const ictNum = form.ictNum.value;

    const optionalNum = form.optionalNum.value;

    
    console.log(banglaNum,englishNum,gN1,gN2,gN3,ictNum,optionalNum)
    //console.log(banglaNum,englishNum,group2Num,group3Num,ictNum,optionalNum)
    const allStudentInfo = {
      roll,
      registration,

      board,
      Type: "REGULAR",
      year,
      examination,

      Birth: "Date of Birth",
      /* name */
      name,
      father,
      motherName,
      institute,
      group,
    };

    // const allStudentNumber={
    //     banglaNum,
    //     englishNum,
    //     group1Num,
    //     group2Num,group3Num,
    //     optionalNum,
    //     ictNum
    // }

    // if (bangla < 33) {
    //   setGrade("F");
    // } else {
    //   setGrade("FAIL");
    // }
  };
  /* hadnle change */

  return (
    <div>
      <h1>{sebject}</h1>
      <h1 className="text-2xl text-red-500">{grade}</h1>

      {/* input filed */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-0 lg:gap-4">
          <div>
            <label className="text-blackBold font-bold text-[18px] mx-2 ">
              <div className="label">
                <span className="label-text"> Roll No</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="textfield06 text-xl"
                name="roll"
                defaultValue={roll}
                disabled
              />
            </label>
          </div>
          <div>
            <label className="text-blackBold font-bold text-[18px] mx-2">
              <div className="label">
                <span className="label-text"> your name?</span>
              </div>
              <input
                type="text"
                placeholder="Your Father`s Name"
                className="textfield06 text-xl font-bold "
                name="name"
              />
            </label>
          </div>
          <div>
            <label className="text-blackBold font-bold text-[18px] mx-2 ">
              <div className="label">
                <span className="label-text">Your Father`s Name</span>
              </div>
              <input
                type="text"
                placeholder="Your Father`s Name"
                className="textfield06 text-xl"
                name="father"
              />
            </label>
          </div>
          <div>
            <label className="text-blackBold font-bold text-[18px] mx-2 ">
              <div className="label">
                <span className="label-text">Your Mother`s Name</span>
              </div>
              <input
                type="text"
                placeholder="Your Mother`s Name"
                className="textfield06 text-xl"
                name="motherName"
              />
            </label>
          </div>
          <div>
            <label className="text-blackBold font-bold text-[18px] mx-2 ">
              <div className="label">
                <span className="label-text"> Institue</span>
              </div>
              <input
                type="text"
                placeholder="Institute"
                className="textfield06 text-xl"
                name="institute"
              />
            </label>
          </div>
          <div>
            <label className="text-blackBold font-bold text-[18px] mx-2 ">
              <div className="label">
                <span className="label-text"> Group</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="textfield06 text-xl"
                name="group"
              />
            </label>
          </div>
        </div>
        {/* subject */}
        <div className="  text-center my-10 border p-7   ">
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              Bangla
            </label>
            <input
              type="text"
              className="textfield06 "
              name="bangla"
              required
            />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="banglaNum"
              required
            />
          </div>
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              English
            </label>
            <input
              type="text"
              className="textfield06 "
              name="english"
              required
            />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="englishNum"
              required
            />
          </div>
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              Gruop Subject 1
            </label>
            <input
              type="text"
              className="textfield06 "
              name="group1"
              required
            />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="gN1"
              
              required
            />
          </div>
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              Group Subject 2
            </label>
            <input
              type="text"
              className="textfield06 "
              name="gN1"
              required
            />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="gN2"
              required
            />
          </div>
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              Group Subject 3
            </label>
            <input
              type="text"
              className="textfield06 "
              name="group3"
              required
            />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="gN3"
              required
            />
          </div>
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              {" "}
              Ict
            </label>
            <input type="text" className="textfield06 " name="ict" required />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="ictNum"
              required
            />
          </div>
          <div className="flex  justify-center my-2 ">
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
            >
              Optional
            </label>
            <input
              type="text"
              className="textfield06 "
              name="optional"
              required
            />
            <label
              htmlFor=""
              className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-1 lg:mx-2 "
            >
              Number
            </label>
            <input
              type="number"
              className="textfieldnum "
              name="optionalNum"
              required
            />
          </div>
<Link to={'/resultSheet'}>
<button
type="submit"
className="  bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 "
>
Submit
</button>
</Link>
      
        </div>
      </form>
    </div>
  );
};

export default ResultCreate;
