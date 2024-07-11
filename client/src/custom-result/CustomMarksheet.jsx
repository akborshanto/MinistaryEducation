import React from "react";

import MarksheetTable from "./MarksheetTable";

const CustomMarksheet = () => {
  const getLocalSorageData = JSON.parse(
    localStorage.getItem("ALL_STUDENT_INFO")

    );

    console.log(getLocalSorageData)
  return (
    <div>




      <MarksheetTable getLocalSorageData={getLocalSorageData}></MarksheetTable>
    </div>
  );
};

export default CustomMarksheet;
