import React,{useState} from 'react'
import {data} from './data'
import {record} from './record.js'
import '../../../index.css'
import {PiCaretUpDownBold} from 'react-icons/pi'


const DoctorNetwork = () => {

    const [rowIndex, setRowIndex] = useState(null)
    const [show, setShow] = useState(false)
    // const[table, setTable]= useState(null)
  return (
    <div className='bg-slate-100 '>
         
            <h1 className=' ext text-2xl p-5 font-extrabold font-serif'>Doctor Network</h1>
            <div class='main'> 
        <div className='mx-5 my-2 pb-2  bg-white shadow-lg rounded-md'>
               
       
        <br />
        <div className=' relative w-full flex flex-col  mb-6 mt-4 '>
        <div className='flex flex-wrap items-center'> 
            <div className='relative w-full px-4 max-w-full flex-grow '>
               
                <div className="max-w-sm px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
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
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </div>
            </div>
        </div>

    {/*Table*/}

        


<div className=' clrh grid grid-flow-col auto-cols-fr gap-6 py-3 px-6  text-left bg-gray-100 m-5 '>
            <div className='flex w-full min-w-96 px-2 truncate'><span>Doctor</span> <span className='flex ml-2 mt-1'><PiCaretUpDownBold/></span></div>
            <div className='flex w-full min-w-96 px-2 truncate'><span>Email</span> <span className='flex ml-2 mt-1'><PiCaretUpDownBold/></span></div>
            <div className='flex w-full min-w-96 px-2 truncate'><span>specialty</span> <span className='flex ml-2 mt-1'><PiCaretUpDownBold/></span></div>
            <div className='flex w-full min-w-96 px-2 truncate'><span>Degree</span> <span className='flex ml-2 mt-1'><PiCaretUpDownBold/></span></div>
            <div className='flex w-full min-w-96 px-2 truncate'><span>Mobile</span> <span className='flex ml-2 mt-1'><PiCaretUpDownBold/></span></div>
            <div className='flex w-full min-w-96 px-2 truncate'><span>DOJ</span> <span className='flex ml-2 mt-1'><PiCaretUpDownBold/></span></div>
            <div className='flex w-full min-w-96 px-2 truncate'></div>
        </div>
        {
            data?.map((ele, index) => (
                <div key={index} onClick={() => {setShow(!show); show ? setRowIndex(ele.id) : setRowIndex(null)}} >
                    <div className=' clr grid grid-flow-col auto-cols-fr gap-6 py-3 px-6 text-left m-5 '>
                        <div className='w-full min-w-96 px-2 truncate'>{ele.Doctor}</div>
                        <div className='w-full min-w-96 px-2 truncate'>{ele.Email}</div>
                        <div className='w-full min-w-96 px-2 truncate'>{ele.specialty}</div>
                        <div className='w-full min-w-96 px-2 truncate'>{ele.Degree}</div>
                        <div className='w-full min-w-96 px-2 truncate'>{ele.Mobile}</div>
                        <div className='w-full min-w-96 px-2 truncate'>{ele.DOJ}</div>
                        <div className='w-full min-w-96 px-2 truncate'>
                        <span className='text-red-500'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                          </svg>

                          </span>
                        </div>
                    </div>
                    {
                        rowIndex === ele.id ?
                        <div className='white m-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-4 ' >
                        <div className=' grid grid-cols-1  '>
                            <div className='grid grid-cols-5 gap-6 text-left text-gray-400'>
                            <div className='grow '>Specialty</div>
                            <div className='grow '>sub-specialty</div>
                            <div className='grow'>Email &nbsp; ID</div>
                            <div className='grow'>Authentication number</div>
                            <div className='grow'>Language</div>     
                            </div>  
                            <div>
                            {
                           record?.map((ele,index)=>(
                                <div key={index}>
                                    <div className=' clr grid grid-cols-5 gap-6 text-left'>
                        <div className=' w-full min-w-96 truncate'>{ele.specialty}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.sub_specialty}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.Email_ID}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.Authentication_number}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.Language}</div>
                    </div>
                                </div>
                           )) 
                        }
                            </div><br/><hr/><br/>
                            <div className='grid grid-cols-4 gap-6  text-left text-gray-400'>
                            <div className='grow'>Clinics</div>
                            <div className='grow'>Address</div>
                            <div className='grow'>Contact</div>
                            <div className='grow'>Consulting hours</div>
                            </div>
                            <div>
                            {
                           record?.map((ele,index)=>(
                                <div key={index}>
                                    <div className=' clr grid grid-cols-4  gap-6  text-left'>
                        <div className=' w-full min-w-96 truncate'>{ele.Clinics}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.Address}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.Contact}</div>
                        <div className=' w-full min-w-96 truncate'>{ele.Consulting_hours}</div>
                    </div>
                                </div>
                           )) 
                        }
                            </div>

                        </div>


                        
                    
                        </div> 
                        : ""
                    }


                    
                </div>
            ))
        }




        </div>
    </div>
    </div>
    </div>
  )
}

export default DoctorNetwork