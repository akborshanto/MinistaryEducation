import React from "react";

const Table = ({ getLocalStorageData }) => {
  console.log(getLocalStorageData);
  const { examination, year, board, roll, registration } =
    getLocalStorageData?.getStroage || {};
  console.log(roll);
  const { father, institute, group, motherName, name } =
    getLocalStorageData?.studentInfo || {};
  const { cgpa, marksheet, totalMarks } =
    getLocalStorageData?.studentData || {};
  return (
    <div>
      <h1 className="text-blackBold font-bold text-3xl text-center my-4">
        {examination} Result {year}
      </h1>
      <div className="overflow-x-auto">
        <table
          className="w-[650px] bg-headerGray text-start"
          align="center"
          cellPadding="0"
          cellSpacing="0"
          
        >
          <thead className="text-start">
            <tr className="border-r-secondary uppercase ">
              <th>Roll No</th>
              <th className="text-red-400">{roll}</th>
              <th>Name</th>
              <th className="uppercase">
                {getLocalStorageData?.studentInfo?.name}
              </th>
            </tr>
          </thead>
          <tbody className="border-b-2  text-start">
            <tr>
              <td>BOARD</td>
              <td>{board}</td>
              <td>Father's Name</td>
              <td>{father}</td>
            </tr>
            <tr className="border border-b-white">
              <td>GROUP</td>
              <td>{group}</td>
              <td>{motherName}</td>
            </tr>
            <tr className="border border-b-white">
              <td>TYPE</td>
              <td> REGULAR</td>
              <td>Date of Birth</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>RESULT</td>
              <td>PASSED</td>
              <td>Institute</td>
              <td>{institute}</td>
            </tr>
            <tr>
              <td>GPA</td>
              <td>{cgpa}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* gradeshjeet */}
      <h1 className="text-blackBold font-bold text-3xl text-center my-">
        Grade Sheet
      </h1>
      <div className="overflow-x-auto">
        <table
          className="w-[650px] bg-headerGray "
          align="center"
          cellPadding="0"
          cellSpacing="0"
        >
          {/* thed */}
          <thead className="bg-gradeBg text-blackBold ">
            <tr className="border-r-secondary uppercase">
              <th>Code</th>
              <th className="">Subject</th>
         
              <th className="uppercase">
   Grade
              </th>
            </tr>
          </thead>

          <tbody className="text-center bg-headerGray text-blackBold font-semibold" >
{
  marksheet?.map(marks=>
    <tr className="border  border-white">
      <td>CODE</td>
      <td>{marks?.subject}</td>
      <td>{marks?.marks}</td>

    </tr>)
}



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
