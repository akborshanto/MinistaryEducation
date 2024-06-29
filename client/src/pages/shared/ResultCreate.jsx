import React, { useState } from 'react'

const ResultCreate = () => {

const [grade,setGrade]=useState([])
const [currentGrade,setCurrengGrade]=useState('')
const [error,setErrof]=useState("")

  const getStroage=JSON.parse(localStorage.getItem('studentInfo'))
  const {examination,year,board,roll,register}=getStroage
console.log(examination)



    const handleSubmit=(e)=>{
e.preventDefault()
const form=e.target;



}

  return (
    <div>
   
<form onSubmit={handleSubmit}>

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
</form>
    
    </div>
  )
}

export default ResultCreate
