import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResultCreate = () => {
  const navigate = useNavigate();
  // const [grade, setGrade] = useState("");
  // const [lettergrade, setLetterGrade] = useState("");
  // const [result, setResult] = useState("");
  // const [sebject, setSubject] = useState("");
  // const [currentGrade, setCurrengGrade] = useState("");
  // const [error, setErrof] = useState("");

  const getStroage = JSON.parse(localStorage.getItem("studentInfo")) || {};
  const { examination, year, board, roll, registration } = getStroage || {};

  /* hadle submit */
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;

  //   const father = form.father.value;

  //   const motherName = form.motherName.value;

  //   const institute = form.institute.value;
  //   const group = form.group.value;

  //   /*  */

  //   /* SUBJECT  */

  //   const bangla = form.bangla.value;

  //   const english = form.english.value;

  //   const group1 = form.group1.value;

  //   const gruop2 = form.group2.value;
  //   console.log(gruop2);
  //   const group3 = form.group3.value;
  //   //    / const ict = form.ict.value;
  //   const optional = form.optional.value;
  //   const subject = { bangla, english, group1, gruop2, group3, optional };

  //   /* NUMVBBER */
  //   const banglaNum = form.banglaNum.value;

  //   const englishNum = form.englishNum.value;

  //   const gN1 = form.gN1.value;

  //   const gN2 = form.gN2.value;
  //   const gN3 = form.gN3.value;

  //   const ictNum = form.ictNum.value;

  //   const optionalNum = form.optionalNum.value;

  //   // if(banglaNum >=   32 && englishNum >=32 && gN1  >= 32&& gN2 >= 32 && gN3 >= 32 && ictNum >= 32&& optionalNum  >= 32){

  //   // setLetterGrade("F")
  //   // setGrade(0)
  //   //  setResult("Fail")
  //   // }
  //   if (banglaNum >= 32) {
  //     setLetterGrade("D");
  //     setGrade(1);
  //     setResult("Passed");
  //   } else if (39 > 32``) {
  //     setResult("fasil");
  //   }

  //   const allNumber = {
  //     banglaNum,
  //     englishNum,
  //     gN1,
  //     gN2,
  //     gN3,
  //     ictNum,
  //     optionalNum,
  //   };
  //   //console.log(banglaNum,englishNum,group2Num,group3Num,ictNum,optionalNum)
  //   const allStudentInfo = {
  //     roll,
  //     registration,

  //     board,
  //     Type: "REGULAR",
  //     year,
  //     examination,

  //     Birth: "Date of Birth",
  //     /* name */
  //     name,
  //     father,
  //     motherName,
  //     institute,
  //     group,
  //   };
  //   console.log(allStudentInfo, allNumber, subject);

  //   // if (bangla < 33) {
  //   //   setGrade("F");
  //   // } else {
  //   //   setGrade("FAIL");
  //   // }
  // };
  /* hadnle change */

  const [formFields, setFormFields] = useState([{ subject: "", marks: "" }]);

  const [studentName, setStudentName] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [allStudeDentInof, setAllStudentInfo] = useState(null);

  /* c */

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    console.log(value, "VASLUE");
    // Validate marks input
    if (name === "marks") {
      const marksValue = parseInt(value, 10);
      if (isNaN(marksValue) || marksValue < 0 || marksValue > 100) {
        return; // Exit early if marks are invalid
      }

      console.log(index, event);
      const values = [...formFields];
      values[index][event.target.name] = event.target.value;
      setFormFields(values);
    }
  };

  /* calculate cgpa */

  const handleRemoveField = (index) => {
    if (formFields.length > 1) {
      const values = [...formFields];
      values.splice(index, 1);
      setFormFields(values);
    }
  };
  const convertToGradePoint = (marks) => {
    if (marks >= 80) return 5;
    if (marks >= 79) return 4;
    if (marks >= 69) return 3.5;
    if (marks >= 59) return 3;
    if (marks >= 49) return 2;
    if (marks >= 39) return 1;

    if (marks >= 32) return 0;

    return 0.0;
  };

  const calculateCgap = (marksheet) => {
    const totalPoint = marksheet.reduce(
      (acc, field) => acc + convertToGradePoint(field.marks),
      0
    );
    const cgpa = totalPoint / marksheet.length;
    return cgpa.toFixed(2);
  };
  /* handle add field */
  const handleAddField = () => {
    if (formFields.length < 14) {
      setFormFields([...formFields, { subject: "", marks: "" }]);
    }
  };
  const totalMarks = studentData?.marksheet?.reduce(
    (total, subject) => total + parseInt(subject?.marks),
    0
  );
  const handleSubmits = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    const father = form.father.value;

    const motherName = form.motherName.value;

    const institute = form.institute.value;
    const group = form.group.value;

    const studentInfo = { name, father, motherName, institute, group };
    setAllStudentInfo({ studentInfo, studentData, totalMarks ,getStroage});

    const cgpa = calculateCgap(formFields);
    setStudentData({ name: studentName, marksheet: formFields, cgpa });

    /* local storage setiIte */
    const allStudentInfoLocalStorage =
      localStorage.setItem(
        "allStudentInfo",
        JSON.stringify(allStudeDentInof)
      ) || {};
      console.log(allStudentInfoLocalStorage)

   // navigate("/resultSHeet")
  };

  return (
    <div>
      {/* subject  */}
      <form onSubmit={handleSubmits} className=" text-center my-10 border p-7 ">
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
        <div className="mx-2">
          <label
            htmlFor=""
            className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
          >
            YOUR NAME
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="textfield06"
          ></input>
        </div>

        {/* marksheet */}
        {/* input map */}
        <div className=" grid grid-cols-1 justify-items-center w-[300px] mx-auto">
          {formFields.map((field, index) => (
            <div>
              <div className=" flex gap-4 my-4 ">
                <div className=" flex gap-3 items-center">
                  <h2 className="">{index + 1}</h2>
                  <label
                    htmlFor=""
                    className="text-blackBold font-bold text-[13px] lg:text-[18px] mx-2"
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={field.sub}
                    onChange={(event) => handleChange(index, event)}
                    className="textfield06"
                  ></input>
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
                    value={field?.marks}
                    onChange={(event) => handleChange(index, event)}
                    className="textfield06"
                    required
                  ></input>
                </div>
              </div>

              {/* button  */}

              <div></div>
              {/* buttotn */}
              <div className=" mx-2">
                {formFields.length < 14 && (
                  <button
                    type="button"
                    onClick={handleAddField}
                    className="bg-inputBg  ext-black w-[140px] h-[40px] my-2 text-[16px]  font-semibold  rounded border border-gray-400"
                  >
                    Add Subject
                  </button>
                )}
                {formFields.length > 1 && (
                  <button
                    type="button"
                    className="bg-inputBg ext-black w-[140px] h-[40px] my-2 text-[16px]  font-semibold  rounded border border-gray-400"
                    onClick={() => handleRemoveField(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-6">
          {" "}
          <button
            type="submit "
            className="bg-inputBg  text-black w-[140px] h-[40px] my-2 text-[16px]  font-semibold  rounded border border-gray-400"
          >
            Genarate
          </button>
        </div>
      </form>

      {/* myhseld */}
      <h2>{studentData?.name}</h2>
      <h1 className="bg-red-300 text-white">{totalMarks}</h1>
      {studentData?.marksheet.map((info) => (
        <div>
          <h1>SUBJECT:{info?.subject}</h1>
          <h2>NUMBER:{info?.marks}</h2>
          <p>CGPA: {studentData?.cgpa}</p>
        </div>
      ))}

      {/* input filed */}

      {
        <form>
          {/* subject */}
          {/*         <div className="  text-center my-10 border p-7   ">
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
              min="0"
              max="100"
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
              name="group2"
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
          <button
            type="submit"
            className="  bg-inputBg  text-black w-[80px] my-5 text-[22px]  font-semibold  rounded border border-gray-400 "
          >
            Submit
          </button>
        </div> */}
        </form>
      }
    </div>
  );
};

export default ResultCreate;
