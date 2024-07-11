import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const CustomResult = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  /* get the value from Regitsternt compononet*/
  const getLocalSorageData = JSON.parse(localStorage.getItem("studentInfo"));
  const convertToGradePoint = (marks) => {
    if (marks >= 80) return setNumber("A++"); // A+
    else if (marks >= 70) return setNumber("A"); // A
    else if (marks >= 60) return 3.5; // A-
    else if (marks >= 50) return 3.0; // B
    else if (marks >= 40) return 2.0; // D
    else if (marks >= 33) return 1.0; // D
    else return 0.0; // F
  };
  {
    /* handle subbject */
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const marks = parseInt(form.marks.value);
    const code = form.code.value;
    const grade="XXXX";
    const cgpa="XXX"

    /* MARKS VALIDATION */
    if (isNaN(marks)) {
      return setError("INVALID ");
    } else if (marks < 0) {
      return setError(" 100 nice dao");
    } else if (marks > 100) {
      return setError("O the boroddato");
    } else {
      setError("");
    }
    convertToGradePoint(marks);

    {
      /* CCGPA CALCUATION */
    }
    // const convertToGradePoint = (marks) => {
    //     if (marks >= 80) return setNumber("A+") ;
    //     if (marks >= 79) return setNumber("A");
    //     if (marks >= 69) return setNumber("A-");
    //     if (marks >= 59) return setNumber("B");
    //     if (marks >= 49) return setNumber("D");
    //     if (marks >= 39) return setNumber("D");

    //     if (marks >= 32) return setNumber("F");

    //     return 0.0;
    //   };

    const resultInfo = { subject, code, marks, number,cgpa,grade };


    setResult((prev) => [...prev, resultInfo]); //prev মানে "previous" বা পূর্ববর্তী। এটি বর্তমানে result স্টেটে যা আছে, তা নির্দেশ করে।
    //e.target.reset();

    /* result validaton */

    setError("");




{/* all student info  */}
const name = form.name.value;

const father = form.father.value;

const motherName = form.motherName.value;

const institute = form.institute.value;
const group = form.group.value;

const studentInfo = { name, father, motherName, institute, group ,getLocalSorageData,result};



  // fetch('http://localhost:5000/allStudentInfo', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(studentInfo)
  // })

// axios.post('http://localhost:3000/allStudentInfo', studentInfo)
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// /* local storage setiIte */
const allStudentInfoLocalStorage =
  localStorage.setItem(
    "ALL_STUDENT_INFO",
    JSON.stringify(studentInfo)
  ) || {};









  };

  return (
    <div className="">
      {error && <h1 className="text-4xl text-red-500">{error}</h1>}
      {/* bio daba */}

      {/* fform input */}
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
                defaultValue={getLocalSorageData?.roll}
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

        {/* ressult info */}
        <div className="r">
          <div className=" flex gap-4 my-4 ">
            <div className="flex  gap-4">
              <label
                htmlFor=""
                className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
              >
                CODE
              </label>
              <input
                type="number"
                name="code"
                className="textfield06"
                required
              ></input>
            </div>
            <div className=" flex gap-3 items-center">
              <label
                htmlFor=""
                className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
              >
                SUBJECT
              </label>
              <input type="text" name="subject" className="textfield06"></input>
            </div>

            <div className="flex  gap-4">
              <label
                htmlFor=""
                className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
              >
                MARKS
              </label>
              <input
                type="number"
                name="marks"
                className="textfield06"
                required
              ></input>
            </div>
          </div>

          <button className=" bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 ">
            Submit
          </button>
        </div>
      </form>
<Link to={'/custom-marksheet'}>
<button  className=" bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 ">
MARKSHEET
</button>
</Link>

    </div>
  );
};

export default CustomResult;
