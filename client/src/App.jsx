import React from 'react'

const App = () => {
  const handleSubmint=(e)=>{
    console.log('df')
  }
  return (
    <div className='  '>
    <form action="" onSubmit={handleSubmint}>
    <label htmlFor="">Examination</label>
    <select className="select  bg-white w-full max-w-xs">
      <option disabled selected>SSC/Dakhil/Equivalent</option>
      <option>SSC/Dakhil/Equivalent</option>
      <option>JSC/JDC</option>
      <option>SSC/DAKHIL</option>
      <option>SSC(vocationl)</option>
      <option>HSC/ALIM</option>
      <option>HSC(vocationl)</option>
      <option>HSC(BM)</option>
      <option>Diploma in Commerce</option>
      <option>Diploma in Business Studies</option>
    </select>
    
    
    
    </form>
    
    </div>
  )
}

export default App
