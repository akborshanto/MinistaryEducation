import React from 'react'

const Table = ({getStroage}) => {
    const { examination, year, board, roll, registration } = getStroage || {};

  return (
    <div>
    <h1 className='text-blackBold font-bold text-3xl text-center my-4'>{examination} Result {year}</h1>
    <div className="overflow-x-auto">
    <table className="w-[650px]" align='center' cellPadding='0' cellSpacing='0'>
      <thead >
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>company</th>
          <th>location</th>
          <th>Last Login</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
    <tbody          >
    
    <tr >
    <th>1</th>
    <td>Cy Ganderton</td>
    <td>Quality Control Specialist</td>
    <td>Littel, Schaden and Vandervort</td>
    <td>Canada</td>
    <td>12/16/2020</td>
    <td>Blue</td>
  </tr>
    </tbody>
      <tfoot>
    
      </tfoot>
    </table>
  </div>
    </div>
  )
}

export default Table
