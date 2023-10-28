 import React from 'react'
import {data} from './Data'

import {PiCaretUpDown} from 'react-icons/pi'
import {BsStarFill} from 'react-icons/bs'
import '../../index.css'
import './service.css'
import { useState } from 'react';
import {PiEye} from 'react-icons/pi'
import {SlNote} from 'react-icons/sl'
import {RiDeleteBinLine} from 'react-icons/ri'
import {BsChevronDown} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'
import{BsChevronLeft} from 'react-icons/bs'
import{BsChevronRight} from 'react-icons/bs'


const ServicerequestTable = () => {
  const [open,setOpen] = useState(false)
   const [rowIndex,setRowIndex] = useState(null)
  return (
    <div>




<div>
<div className=' p-5 ml-5 md:p-10 -mt-12 md:w-96 w-[89%] '>
  <label for="hs-search-box-with-loading-5" class="block text-sm font-medium mb-2 dark:text-white"> </label>
  <div class="relative flex rounded-md shadow-sm">
    <input type="text" id="hs-search-box-with-loading-5" name="hs-search-box-with-loading-5" class="py-3 px-4 pl-11 block w-full border-slate-200" placeholder= " Search by keywords"/>
    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
      <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </div>
    
  </div>
</div>

<div class="flex  p-10 -mt-10 flex-col ">
  <div class="-m-1.5 mt-15 overflow-x-auto">
    <div class="p-1.5 w-fit  inline-block align-middle">
      <div class="border overflow-hidden dark:border-[#FOFOFO]">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-lg font-bold text-gray-500 bg-[#FAFAFA] "><div className='flex'>Ticket&nbsp;ID<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-6 py-3 text-left text-lg font-bold text-gray-500 bg-[#FAFAFA]"><div className='flex'>Employee&nbsp;name<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-6 py-3 text-left text-lg font-bold text-gray-500 bg-[#FAFAFA]"><div className='flex'>Area&nbsp;of&nbsp;problem<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-6  py-3  text-lg font-bold text-gray-500 bg-[#FAFAFA]"><div className='flex'>Request&nbsp;type<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-6 py-3  text-lg font-bold text-gray-500 bg-[#FAFAFA]"><div className='flex'>Priority<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-6 py-3  text-lg font-bold text-gray-500 bg-[#FAFAFA]"><div className='flex'>Completed&nbsp;Request<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-6 py-3 text-right text-lg font-bold text-gray-500 bg-[#FAFAFA]"></th>

            </tr>
          </thead>
          <tbody>
                {
                    data.map((ele,index)=>(
                      <tr className='w-screen' key={index}>
                    
                        <td className='text-md text-left truncate px-2 py-3 w-[7%] text-[#2B3674]'>{ele['Ticket Id']}</td>
                       
                        <td className='text-md text-left truncate px-2 py-3 w-[17%]text-[#2B3674]'>
                          <div>
                        <span>
                          {
                            ele.color===1 ? <><span className='flex gap-4 '> <BsStarFill fill="green" className='mt-1'/>{ele['Employee name']}</span> </>
                            : ele.color===2 ? <><span className='flex gap-4'> <BsStarFill fill="gray " className='mt-1'/>{ele['Employee name']}</span></>
                             : <><span className='flex gap-4'> <BsStarFill fill="yellow" className='mt-1'/>{ele['Employee name']}</span></>
                          }
        
                          
                          
                          </span>  
                          
                        </div>
                        
                        </td>
                        <td className='text-md text-left truncate px-2 py-3 w-[10%] text-[#2B3674]'>{ele['Request raised']}
                      
                      </td>
                        <td className='text-md text-left truncate px-2 py-3 w-[10%]text-[#2B3674]'>
                            <div>

                              <span>

                              {

                                ele.type==="g" ? <><span className='text-green-500'>{ele['Request type']}</span></>
                                :  <><span className='text-orange-500'>{ele['Request type']}</span></>
                              }
                              </span>
                            </div>


                        </td>
                      
                        <td className='text-md text-left truncate px-2 py-3 w-[10%] text-[#2B3674]'>

                          <div>

                              <span>

                              {

                                  ele.plus===3 ? <><span className='text-[#2C2C2C] border border-[#2C2C2C] rounded-3xl w-24 py-1 px-2 text-center inline-block '>{ele.Priority}</span></>
                                : ele.plus===2 ?<><span className='text-[#FFC480] border border-[#FFC480] rounded-3xl w-24 py-1 px-2 text-center inline-block '>{ele.Priority}</span></>

                                : <><span className='text-[#FF0023] border border-[#FF0023] rounded-3xl w-24 py-1 px-2 text-center inline-block '>{ele.Priority}</span></>

                              }
                              </span>
                            </div>





                        </td>
                        <td className='text-md text-left truncate px-2 py-3 w-[10%] text-[#2B3674]'><div>

                              <span>

                              {

                                ele.collor==="p" ? <><span className='text-red-500'>{ele['Assigned to']}</span></>
                                :  <><span className='text-[#2B3674]'>{ele['Assigned to']}</span></>
                              }
                              </span>
                            </div></td>
                        <td className='text-md text-left truncate px-2 py-3 w-[10%] '>

                        
                        <button className='bg-[#F2F2F2] text-[#777777] whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs 
                            font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition 
                            duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:border-[#83A0DB] focus:border-4         focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 
                            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none 
                            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]' 
                            onClick={()=>{setOpen(!open);open ? setRowIndex(null) : setRowIndex(ele.ID)}}>
                                Actions
                            </button>
                            {
                              ele.ID=== rowIndex ? 
                              <div className='absolute right-40 z-1000 m-0 w-48 h-32 p-3 overflow-hidden text-[#B2B2B2]
                              rounded-lg border-none bg-clip-padding text-left text-base shadow-lg bg-white
                               '>
                                    <li className='list-none flex truncate'>
                                        <span className='pt-1'><PiEye/></span><span className='pl-2 pb-3'>View</span></li>
                                    <li className='list-none flex truncate'>
                                        <span className='pt-1'><SlNote/></span><span className='pl-2 pb-3'>BLock Appointment</span></li>
                                    <li className='list-none flex truncate'>
                                        <span className='pt-1'><RiDeleteBinLine/></span><span className='pl-2 pb-3'>Decline request</span></li>
                              </div>
                       : ""
                            }

                     
                        </td>
                    </tr>
              
            ))}
                </tbody>
        </table>
      </div>


{/* below */}
<div className='flex justify-between'>
            <div className='flex '>
         <div className='flex'> <div className='mt-9 ml-2'><BsStarFill fill='green'/></div>  <div className='ml-3 mt-8'><span>  High Priority</span></div></div>
         <div className='flex'>  <div className='mt-9 ml-10'><BsStarFill fill='yellow'/></div>  <div className='ml-4 mt-8'><span>Mid Priority</span></div></div>
         <div className='flex'>  <div className='mt-9 ml-10'><BsStar fill='slate'/></div>  <div className='ml-4 mt-8'><span>Low Priority</span></div></div>
         </div>
<div>
 <div className='flex'> <div><div className='mt-9 ml-10'><BsChevronLeft/></div></div>
       <div className='mt-7 text-lg ml-1'><span> <div><span className='text-blue-700 font-bold'>&nbsp;1  &nbsp; </span> 2  &nbsp; 3 &nbsp;  4 &nbsp;  &nbsp;<div className='-mt-6 ml-24'><BsChevronRight/></div></div>   </span></div>
       </div>
        </div>
       </div>
    {/* below ends*/}


    </div>
  </div>
</div>
</div>






    </div>
  )
}

export default ServicerequestTable