import React from 'react'



import Fotoer from '../pages/shared/Fotoer'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div className='container mx-auto my-4  bg-white p-4  rounded-lg'>
<Navbar></Navbar>
<Outlet></Outlet>
<Fotoer></Fotoer>



    </div>
  )
}

export default Root
