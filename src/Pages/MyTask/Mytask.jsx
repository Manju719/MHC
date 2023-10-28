import React from 'react'
import FourBoxes from '../../Components/MyTask/FourBoxes'
import FaceCard from '../../Components/MyTask/FaceCard'
import Layout from '../../Components/Common/Layout'
import { Outlet } from 'react-router-dom'
import Assigned from '../../Components/MyTask/Assigned'

const Mytask = () => {
  return (

    <div className='bg-[#F4F7FE] overflow-hidden'>
        
        <FourBoxes/>
        <FaceCard/>
        <Outlet/>
  
    </div>
  )
}

export default Mytask