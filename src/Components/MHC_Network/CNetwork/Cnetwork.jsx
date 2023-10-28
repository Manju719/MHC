import React  from 'react';
import {data} from './data'
import '../../../index.css'
import { PiCaretUpDownBold } from 'react-icons/pi';



const CNetwork = () => {
    return (
      // container
      <div className='main bg-[#F4F7FE] h-[72] w-[78.8rem] min-[96] '>
        
          
              <h1 className='p-5 font-extrabold font-serif text-lg'>Clinic Network</h1>
      
          <div className='mx-5 my-2 pb-2  bg-white shadow-lg rounded-md'>
            
                 
         
          <br />
          <div className=' relative w-full flex flex-col  mb-6 mt-4 '>
          <div className='flex flex-wrap items-center'>
              <div className='relative w-fit px-4 max-w-full flex-grow '>
                 
                  <div className="max-w-sm px-4">
              <div className="relative">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                  </svg>
                  <input
                      type="text"
                      placeholder="Search by keywords"
                      className="w-80 h-10 py-3 pl-10 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                  />
              </div>
          </div>
              </div>
          </div>
  
      {/*Table*/}
  
          <div className='block bg-transparent m-0 p-5 '>
              <table className=' p-5 min-w-fit border border-solid border-l-0 border-r-0 pl-5'>
                  <thead className=' '>
                      <tr className='bg-[#FAFAFA] w-screen text-[#4F4F4F]'>
                          <th className='text-md px-2 py-3 text-left w-[15%]'><div className='flex '><span>Hospital&nbsp;Name </span><span className='mt-1 ml-2 text-lg'><PiCaretUpDownBold /></span></div></th> 
                          <th className='text-md px-2 py-3 text-left w-[15%]'><div className='flex '><span>Clinic&nbsp;Name </span><span className='mt-1 ml-2 text-lg'><PiCaretUpDownBold /></span></div></th> 
                          <th className='text-md px-2 py-3 text-left w-[35%]'><div className='flex '><span>Address</span><span className='mt-1 ml-2 text-lg'><PiCaretUpDownBold/></span></div></th>
                          <th className='text-md px-2 py-3 text-left w-[15%]'><div className='flex '><span>Mobile</span><span className='mt-1 ml-2 text-lg'><PiCaretUpDownBold /></span> </div></th>
                          <th className='text-md px-2 py-3 text-left w-[15%]'><div className='flex '><span>Priority</span><span className='mt-1 ml-2 text-lg'>< PiCaretUpDownBold/></span></div></th>
                          <th className='text-md px-2 py-3 text-left w-[15%]'> </th>
                      </tr>
                  </thead>
  
                  <tbody>
                    {
                      data.map((ele,index)=>(
                        <tr className='text-[#2B3674] w-screen' key={index}>
                      
                          <td className='text-md text-left truncate px-2 py-3 w-[15%]'>{ele.Hospital_Name}</td>
                          <td className='text-md text-left px-2 py-3 w-[15%] '>{ele.Clinic_Name}</td>
                          <td className='text-md text-left px-2 py-3 w-[35%]'>{ele.Address}</td>
                          <td className='text-md text-left truncate px-2 py-3 w-[15%]'>{ele.Mobile}</td>
                          <td className='text-md text-left truncate px-2 py-3 w-[15%]'>{ele.Priority}</td>
                          <td className='text-md text-left truncate px-2 py-3 w-[15%]'>
                            <span className='text-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                              <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                            </svg>
  
                            </span>
                          </td>
                      </tr>
                
              ))}
                  </tbody>
  
              </table>
          
          </div>
  
  
  
  
          </div>
      </div>
      </div>
    )
  }
  
  export default CNetwork