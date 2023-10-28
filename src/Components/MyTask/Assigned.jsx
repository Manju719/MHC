import React ,{useState} from 'react'
import {Data} from "./AssignedData"
import {PiCaretUpDown} from "react-icons/pi"
import {BsStarFill} from "react-icons/bs"
import {PiEye} from "react-icons/pi"
import {SlNote} from "react-icons/sl"
import {RiDeleteBinLine}from "react-icons/ri"
import {BsStar} from "react-icons/bs"
import {BsChevronLeft} from "react-icons/bs"
import {BsChevronRight} from "react-icons/bs"

const Assigned = () => {

    const [open, setOpen] = useState(false);
    const [rowIndex, setRowIndex] = useState(null);

  return (
    <div className='w-[98.2%] lg:ml-4 bg-[#f4f7fe] border '>
      <div className='py-2'>
<div className='bg-[#F4F7FE] w-[99.5%] lg:w-[98.4%] ml-1.5 h-[20%] shadow-sm rounded-xl ' >
<div class="ml-2 md:ml-0 max-w-xs relative p-2">
            <label for="hs-table-with-pagination-search" class="sr-only">Search</label>
            <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" class="p-3 pl-8 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="Search for items"></input>
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
              <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
</div>
</div>
</div>

<div class="flex flex-col ml-2">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 lg:w-[99%] inline-block align-middle">
      <div class="overflow-scroll xl:overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead >
            <tr>
              <th scope="col" class="px-3 py-3 text-left text-lg font-semibold text-black bg-[#FAFAFA] "><div className='flex'>Ticket&nbsp;ID<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-3 py-3 text-left text-lg font-semibold text-black bg-[#FAFAFA]"><div className='flex'>Employee&nbsp;name<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-3 py-3 text-left text-lg font-semibold text-black bg-[#FAFAFA]"><div className='flex'>Area&nbsp;of&nbsp;problem<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-3 py-3 text-lg font-semibold text-black bg-[#FAFAFA]"><div className='flex'>Request&nbsp;type<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-3 py-3 text-lg font-semibold text-black bg-[#FAFAFA]"><div className='flex'>Priority<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-3 py-3 text-lg font-semibold text-black bg-[#FAFAFA]"><div className='flex'>Raised&nbsp;Date<div className='flex ml-2 mt-1 text-lg'> <div><PiCaretUpDown/></div> <div><span className='ml-2 font-semibold'></span></div></div></div></th>
              <th scope="col" class="px-3 py-3 text-right text-lg font-semibold text-gray-500 bg-[#FAFAFA]"></th>

            </tr>
          </thead>
          <tbody className='text-[#2B3674]'>
            {
              Data.map((ele,index)=>(
              <tr className='w-screen' key={index}>
                    
              <td className='text-md text-left truncate px-2 py-3 w-[14%]'>
                <div className='font-semibold'>{ele.Ticket_ID}</div>
              </td>

              <td className='text-md text-left truncate px-2 py-3 w-[14%]'>
              <div className='flex font-semibold'> 
      
               <span>
                {
                  ele.color===1 ? <> <span className='flex gap-4'><BsStarFill fill='green' className='mt-1 '/>{ele.Employee_name}</span></>
                  : ele.color=== 2 ? <><span className='flex gap-4'><BsStarFill fill='gray' className='mt-1 '/>{ele.Employee_name}</span></>
                  : <><span className='flex gap-4'><BsStarFill fill='Yellow' className='mt-1 '/>{ele.Employee_name}</span></>
                }
                </span>
              </div>
              </td>

              <td className='text-md text-left truncate px-2 py-3 w-[14%]'>
                <div className='font-semibold'>{ele.Area_of_problem}</div>
              </td>

              <td className='text-md text-left truncate px-2 py-3 w-[14%]'>
                {ele.Request_Type_no === 1 ? (
                <span className="text-green-400">
                  {ele.Request_type}
                </span>
              ) : ele.Request_Type_no === 2 ? (
                <span className="text-yellow-400">
                  {ele.Request_type}
                </span>
              ) : (
                <span className="text-orange-400">
                  {ele.Request_type}
                </span>
              )}
              </td>

              <td className='text-md text-left truncate px-2 py-3 w-[14%]'>
                        {ele.key === 1 ? (
                <span className=" text-[#2C2C2C] border border-[#2c2c2c] rounded-3xl w-24 py-1 px-2 text-center inline-block">
                  {ele.Priority}
                </span>
              ) : ele.key === 2 ? (
                <span className="text-orange-400 border-orange-400 border rounded-3xl w-24 py-1 px-2 text-center inline-block">
                  {ele.Priority}
                </span>
              ) : (
                <span className="text-[#FF0023] border border-[#e74848f9] rounded-3xl w-24 py-1 px-2 text-center inline-block">
                  {ele.Priority}
                </span>
              )}
              </td>
                        
              <td className='text-md text-left truncate px-2  py-3 w-[14%]'>
              {ele.Raised_Date}
              </td>
                       
              <td className='text-md text-left truncate px-2 py-3 w-[16%]'>

              <button className='bg-[#F2F2F2] text-[#777777] whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs 
                font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition 
                duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:border-[#83A0DB] focus:border-4  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 
                active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none 
                dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]' 
                onClick={()=>{setOpen(!open);open ? setRowIndex(null) : setRowIndex(ele.ID)}}>
                Actions
              </button>
              {
                ele.ID=== rowIndex ? 
                  <div className='absolute right-10 z-1000 m-0 w-48 h-32 p-3 overflow-hidden text-[#B2B2B2]
                    rounded-lg border-none bg-clip-padding text-left text-base shadow-lg bg-white'>
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



{/* below */}
      <div className='flex justify-between'>
        <div className='flex mb-4'>
         <div className='flex'> 
         <div className='mt-9 ml-2'><BsStarFill fill='green'/></div>
         <div className='ml-3 mt-8'><span>High</span><span>Priority</span></div>
         </div>
         <div className='flex'> 
         <div className='mt-9 ml-10'><BsStarFill fill='yellow'/></div> 
         <div className='ml-4 mt-8 flex'><span>Mid </span><span>Priority</span></div>
         </div>
         <div className='flex'>
         <div className='mt-9 ml-10'><BsStarFill fill='gray'/></div>
         <div className='ml-4 mt-8 flex'><span>Low </span><span>Priority</span></div>
         </div>
         
         </div>
        
         <div className='flex'> 
         <div><div className='mt-[60%] ml-10'><BsChevronLeft/></div></div>
         <div className='mt-7 text-lg ml-1'><span> <div><span className='text-blue-700 font-bold'>&nbsp;1  &nbsp; </span> 2  &nbsp; 3 &nbsp;  4 &nbsp;<div className='-mt-6 ml-24'><BsChevronRight/></div></div>   </span></div>
         </div>

        
      </div>
{/* below ends */}





      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Assigned