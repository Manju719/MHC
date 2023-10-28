import React from 'react'
import face from '../../IMAGES/Mytask/smile.png'
import { NavLink} from 'react-router-dom'

const FaceCard = () => {
  return (
    <div>
         <div class="flex flex-col lg:mt-0 lg:w-[98%] w-[99.2%] lg:ml-4 m-1 bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <ul className='flex gap-2'>     
      <li><div><img src={face} alt="" className='w-24 h-28' /></div></li>
      <li><div><span>
        <h1 className='text-2xl ml-3 mt-1 font-bold'>John Doe</h1>
         <div className='ml-3 mt-3'>
          <span className='text-[#777777] font-semibold'>Emp Id </span>
          <span className='font-semibold'><span className='font-bold text-slate-500'>: </span>128946</span>
          </div>  
          <div className='ml-3 mt-2'>
            <span className='text-[#777777] font-semibold'>Today's Date : </span>
            <span className='font-semibold'>28 july 2023</span></div></span>
            </div>
      </li>
        </ul>
            <ul className='flex flex-row lg:gap-5 justify-evenly gap-2 lg:mt-8 mt-2 w-full flex-wrap'>
            <li><div className='text-xl font-semibold text-[#9E9FAC]'>
              <NavLink to={'/dashboard/task/assigned'}>Assigned Request</NavLink ></div></li>
            <li><div className='text-xl font-semibold text-[#9E9FAC]'>
              <NavLink to={'/dashboard/task/open'}>Open Request   </NavLink ></div></li>
            <li><div className='text-xl font-semibold text-[#9E9FAC]'>
              <NavLink to={'/dashboard/task/closed'}>Closed Request</NavLink ></div></li>
            <li><div className='text-xl font-semibold text-[#9E9FAC]'>
              <NavLink to={'/dashboard/task/escalation'}>Escalations</NavLink ></div></li>
            <li><div className='text-xl font-semibold text-[#9E9FAC]'>
              <NavLink to={'/dashboard/task/completed'}>Completed Request</NavLink ></div></li>
            </ul>         
</div>

    </div>
  )
}

export default FaceCard