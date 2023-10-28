import React ,{useState}from 'react'
import MHC from '../../IMAGES/Sidebar/MHC.jpg'
import Ov from '../../IMAGES/Sidebar/overview.png'
import notes from '../../IMAGES/Sidebar/notes.png'
import ap from '../../IMAGES/Sidebar/appiontments.png'
import mn from '../../IMAGES/Sidebar/MHC2.png'
import cal from '../../IMAGES/Sidebar/calender.png'
import {IoIosArrowUp} from 'react-icons/io'
import {IoCallOutline} from 'react-icons/io5'

const Sidebar = () => {
  const [open, setopen] = useState(false)
  const [openM, setopenM] = useState(false)

  return (
    
      <div class=" dark:bg-[#3168bc]">
  {/* <!-- ========== MAIN CONTENT ========== --> */}
  {/* <!-- Sidebar Toggle --> */}
  <div class="sticky top-0 inset-x-0 z-20 bg-[#3168bc] border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center py-4">
      {/* <!-- Navigation Toggle --> */}
      <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span class="sr-only">Toggle Navigation</span>
        <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      {/* <!-- End Navigation Toggle --> */}

      {/* <!-- Breadcrumb --> */}
      <ol class="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
          Application Layout
          <svg class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </li>
        <li class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
          Dashboard
        </li>
      </ol>
      {/* <!-- End Breadcrumb --> */}
    </div>
  </div>
  {/* <!-- End Sidebar Toggle --> */}

  {/* <!-- Sidebar --> */}
  <div id="application-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-72 bg-[#3168bc] border-r border-gray-200 pt-3 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 ">
    <div class="font-semibold text-lg text-white flex h-10 pl-6">
      <span className='w-12'><img src={MHC} alt="" /></span>
      <span className='ml-3 mt-2'> Make Health Connect</span>
    </div>

    <nav class="hs-accordion-group p-6 w-full flex flex-wrap flex-col justify-between min-h-full overscroll-none overflow-hidden" data-hs-accordion-always-open>
      
    
      <ul class="space-y-5 ">
        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-md hover:bg-[#10529c] dark:bg-gray-900 dark:text-white" href="javascript:;">
            <img src={Ov} alt="" />
            <span className='ml-2'> Overview</span>
          </a>
        </li>

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-md hover:bg-[#10529c] dark:bg-gray-900 dark:text-white" href="javascript:;">
          <img src={notes} alt="" />
          <span className='ml-1'> Service Request</span>
          </a>
        </li>
           

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-md hover:bg-[#10529c] dark:bg-gray-900 dark:text-white" href="javascript:;">
          <img src={ap} alt="" />
           <span className='ml-2'> My Task</span>
          </a>
        </li>

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-md hover:bg-[#10529c] dark:bg-gray-900 dark:text-white" href="javascript:;">
          <div onClick={()=>setopen(!open)}>
           <button className='flex justify-center items-center border-none'>
           
            <span className='flex'>
                <img src={cal} alt="" className='w-5 h-5 mt-1'/>
                <p className='pl-5  font-semi text-xl text-white' > Appointments</p>
           </span>
            <span className='pl-5 font-semi text-xl cursor-pointer' >
            <IoIosArrowUp className={`${!open ? "rotate-180" : "rotate-0"}`}/>
        </span>
            </button>
    
        </div>
          </a>
        </li>
        {
                open ? 
                <div className='flex flex-col font-semibold text-sm ml-12 text-white gap-3'>
                 <div className=''> Calendar</div>
                <div>Book Appointments</div>
                <div> Modify Appointments</div>
                <div> View Appointments</div>
                </div>  : ""
             }

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-md hover:bg-[#10529c] dark:bg-gray-900 dark:text-white" href="javascript:;">
          <div onClick={()=>setopenM(!openM)}>
           <button className='flex justify-center items-center border-none'>
           
            <span className='flex'>
                <img src={mn} alt="" className='w-5 h-5 mt-1' />
                <p className='pl-5  font-semi text-xl text-white' >MHC Network</p>
           </span>
            <span className='pl-5 font-semi text-xl cursor-pointer' >
            <IoIosArrowUp className={`${!openM ? "rotate-180" : "rotate-0"}`}/>
        </span>
            </button>
    
        </div>
            
          </a>
        </li>
        {
                openM ? 
                <div className='flex flex-col font-semibold text-sm ml-12 text-white gap-3'>
                 <div className=''>Doctor Network</div>
                <div>Clinic Network</div>
                <div>Company Network</div>
                </div>  : ""
             }


        

       
      </ul>

      <div className=''>
        <div className='text-white font-semibold flex text-sm '>
        <span className='mt-1 mr-2'><IoCallOutline/></span>
        <span>Support Contact - +61 81234 5678</span>
      </div>
      </div>
    
       
      
    
    </nav>



    <div>

 </div>

  </div>
  {/* <!-- End Sidebar --> */}


  {/* <!-- ========== END MAIN CONTENT ========== -->  */}
</div>
    
  )
}

export default Sidebar