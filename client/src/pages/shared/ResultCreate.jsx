import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResultCreate = () => {
  const [grade, setGrade] = useState("");
  const [lettergrade, setLetterGrade] = useState("");
  const [result, setResult] = useState("");
 // const [sebject, setSubject] = useState("");
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
    console.log(gruop2);
    const group3 = form.group3.value;
    //    / const ict = form.ict.value;
    const optional = form.optional.value;
    const subject = { bangla, english, group1, gruop2, group3, optional };

    /* NUMVBBER */
    const banglaNum = form.banglaNum.value;

    const englishNum = form.englishNum.value;

    const gN1 = form.gN1.value;

    const gN2 = form.gN2.value;
    const gN3 = form.gN3.value;

    const ictNum = form.ictNum.value;

    const optionalNum = form.optionalNum.value;

    // if(banglaNum >=   32 && englishNum >=32 && gN1  >= 32&& gN2 >= 32 && gN3 >= 32 && ictNum >= 32&& optionalNum  >= 32){

    // setLetterGrade("F")
    // setGrade(0)
    //  setResult("Fail")
    // }
    if (banglaNum >= 32) {
      setLetterGrade("D");
      setGrade(1);
      setResult("Passed");
    }else if ( 39 > 32 ){
      setResult("fasil");
    }

    const allNumber = {
      banglaNum,
      englishNum,
      gN1,
      gN2,
      gN3,
      ictNum,
      optionalNum,
    };
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
    console.log(allStudentInfo, allNumber, subject);

    // if (bangla < 33) {
    //   setGrade("F");
    // } else {
    //   setGrade("FAIL");
    // }
  
  };
/* c========== */
const [formFields ,setFormFields]=useState([{subject:'', marks:''}])
const [studentName, setStudentName] = useState('');
const [studentData, setStudentData] = useState(null);




const handleSubmits=(e)=>{
e.preventDefault()
const cgpa= calculateCgap(formFields)
setStudentData({ name: studentName, marksheet: formFields,cgpa });


}

 /* c */



 const handleChange=(index,event)=>{
  console.log(index,event)
const values=[...formFields]
values[index][event.target.name]= event.target.value;
setFormFields(values)

 }

/* calculate cgpa */




const handleRemoveField = (index) => {
  if (formFields.length > 1) {
    const values = [...formFields];
    values.splice(index, 1);
    setFormFields(values);
  }
};
const  convertToGradePoint =(marks)=>{

  if (marks >= 90) return 4.0;
  if (marks >= 80) return 3.5;
  if (marks >= 70) return 3.0;
  if (marks >= 60) return 2.5;
  if (marks >= 50) return 2.0;
  if (marks >= 40) return 1.5;
  return 0.0;

}

const calculateCgap=(marksheet)=>{
const totalPoint= marksheet.reduce((acc,field)=> acc + convertToGradePoint(field.marks),0)
const cgpa= totalPoint /  marksheet.length
return cgpa.toFixed(2)

}
 /* handle add field */
 const handleAddField = () => {
  if (formFields.length < 8) {
    setFormFields([...formFields, { subject: '', marks: '' }]);
  }
};


  return (


<div>


<form onSubmit={handleSubmits}>

<input type="text" value={studentName}  onChange={(e)=>setStudentName(e.target.value)}></input>
{/* input map */}
{

  formFields.map((field,index)=>

<div>
<div>
<label>Subject</label>
<input type="text" name="subject" value={field.sub} onChange={(event)=>handleChange(index,event)}></input>
<label>Subject</label>

<label>Marks</label>
<input type="number" name="marks" value={field.marks} onChange={(event)=>handleChange(index,event)}></input>
</div>


{formFields.length > 1 && (
  <button type="button" onClick={() => handleRemoveField(index)}>
    Remove
  </button>
)}
</div>

  


  )


}




<button type="submit">Genarate Marksheet</button>
</form>


{formFields.length < 14 && (
  <button type="button" onClick={handleAddField} className="btn btn-info">
    Add Subject
  </button>
)}

{/* myhseld */}
<h2>{studentData?.name}</h2>
{
studentData?.marksheet.map(info=> <div>
<h1>SUBJECT:{info?.subject}</h1>
<h2>NUMBER:{info?.marks}</h2>
    <p>CGPA: {studentData?.cgpa}</p>
</div>)
}









<div>
<h1>{grade}</h1>
<h1>{result}</h1>
<h1>{lettergrade}</h1>
<h1 className="text-2xl text-red-500"></h1>

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
  </div>
</form>
</div>
</div>




  
  );
};

export default ResultCreate;
