import React from 'react'

const MarksheetTable = ({getLocalSorageData}) => {
    const { examination, year, board, roll, registration } =
    getLocalSorageData.getLocalSorageData;

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
          {getLocalSorageData?.getLocalSorageData?.name}
        </th>
      </tr>
    </thead>
    <tbody className="border-b-2  text-start">
      <tr>
        <td>BOARD</td>
        <td>{getLocalSorageData?.board}</td>
        <td>Father's Name</td>
        <td>{getLocalSorageData?.father}</td>
      </tr>
      <tr className="border border-b-white">
        <td>GROUP</td>
        <td>{getLocalSorageData?.group}</td>
        <td>{getLocalSorageData?.motherName}</td>
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
        <td>{getLocalSorageData?.institute}</td>
      </tr>
      <tr>
        <td>GPA</td>
        <td>CGPA</td>
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

              <th className="uppercase">Grade</th>
            </tr>
          </thead>

          <tbody className="text-center bg-headerGray text-blackBold font-semibold">
            {getLocalSorageData?.result.map((marks) => (
              <tr className="border  border-white">
                <td>{marks?.code}</td>
                <td>{marks?.subject}</td>
                <td>{marks?.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="text-center text-blackBold">
       TOTAL
        </h1>
      </div>









    </div>
  )
}

export default MarksheetTable
