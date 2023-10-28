import React from 'react'
import firstCard from '../../IMAGES/Mytask/ro1.png'
import SecondCard from '../../IMAGES/Mytask/ro2.png'
import ThirdCard from '../../IMAGES/Mytask/ro3.png'
import FourCard from '../../IMAGES/Mytask/ro4.png'

const FourBoxes = () => {
  return (
    <div className='w-[99%] lg:w-[98.9%] m-1 lg:ml-4 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>

      
{/*  */}
      {/* <!-- Card Section --> */}
<div class="w-full  px-4 py-6 sm:px-6 lg:px-4 lg:py-10 mx-auto ">
<h1 className=' -mt-6 mb-4 font-bold text-3xl'>My Task</h1>
  {/* <!-- Grid --> */}
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
    {/* <!-- Card --> */}
    <a class="group flex flex-col flex-wrap bg-white border hover:shadow-md transition border-l-8 border-l-purple-300 rounded-2xl shadow-lg" href="#">
      <div class="p-4 md:p-5 lg:p-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="h-[3.475rem] w-[3.475rem] rounded-full" src={firstCard} alt="Image Description"/>
            <div class="ml-5 lg:ml-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
               <span className='text-3xl  font-semibold'>180</span>
               <br></br>
               <span className='tracking-widest text-slate-500 '>Total Request</span> 
               <br></br>
               <span className='tracking-widest text-slate-500'>raised</span>
              </h3>
            </div>
          </div>
          {/* <div class="pl-3">
          </div> */}
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a class="group flex flex-col flex-wrap bg-white border  rounded-xl hover:shadow-md transition border-l-8  border-l-blue-200 shadow-lg" href="#">
      <div class="p-4 md:p-5 lg:p-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="h-[3.475rem] w-[3.475rem] rounded-full" src={SecondCard} alt="Image Description"/>
            <div class="ml-5 lg:ml-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              <span className='text-3xl  font-semibold'>97</span><br></br><span className='tracking-widest text-slate-500'>Today's requests</span> 
              </h3>
            </div>
          </div>
          <div class="pl-3">
          </div>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a class="group flex flex-col bg-white border hover:shadow-md transition border-l-8 border-l-purple-300 rounded-2xl shadow-lg" href="#">
      <div class="p-4 md:p-5 lg:p-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="h-[3.475rem] w-[3.475rem] rounded-full" src={ThirdCard} alt="Image Description"/>
            <div class="ml-5 lg:ml-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              <span className='text-3xl  font-semibold'>78</span><br></br><span className='tracking-widest text-slate-500'>Resolved Request</span>
              </h3>
            </div>
          </div>
          <div class="pl-3">
          </div>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a class="group flex flex-col bg-white border rounded-xl hover:shadow-md transition border-l-8  border-l-blue-200 shadow-lg" href="#">
      <div class="p-4 md:p-5 lg:p-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center justify-center ">
            <img class="h-[3.475rem] w-[3.475rem] rounded-full" src={FourCard} alt="Image Description"/>
            <div class="ml-5 lg:ml-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              <span className='text-3xl  font-semibold'>05</span><br></br><span className='tracking-widest text-slate-500'>Unsolved<br></br>requests</span> 
              </h3>
            </div>
          </div>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    

   

   
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Section --> */}
    </div>
  )
}

export default FourBoxes