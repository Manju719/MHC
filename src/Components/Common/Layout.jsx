import React from 'react'
import {SlNote} from 'react-icons/sl'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {VscTypeHierarchySub} from 'react-icons/vsc'
import {IoCallOutline} from 'react-icons/io5'
import {FaUserLock} from 'react-icons/fa'
import {BiSolidDownArrow} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {LiaUserLockSolid} from 'react-icons/lia'
import {LiaUserSolid} from 'react-icons/lia'
import mhc from '../../IMAGES/Sidebar/MHC.jpg'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = ( { children } ) => {
  return (
    <div>
        <div className="bg-gray-50 dark:bg-slate-900">
  <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700">
    <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
      <div className="mr-5 lg:mr-0 lg:hidden">
        <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
      </div>

      <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div className="sm:hidden">
          <button type="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>

        <div className="hidden sm:block">
            <div className='flex gap-4 items-center'>
            <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl font-medium bg-slate-100 text-gray-700 shadow-sm align-middle hover:bg-gray-50  text-sm "><FaUserLock className='w-5 h-5'/></button> 
            <span className=' text-lg'>Employee View</span>
            <span>
                

             
<div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
  <button id="hs-dropdown" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-medium bg-gray-100 text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm ">
  <BiSolidDownArrow />
    
  </button>

  <div class="hs-dropdown-menu w-52 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
      <LiaUserLockSolid className='w-6 h-6'/>
      Super Admin View
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
      <LiaUserSolid className='w-6 h-6'/>
      Employee View
    </a>
   
  </div>
</div>


            </span>
            </div>
        </div>

        <div className="flex flex-row items-center justify-end gap-4">
          <button type="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
          </button>
          <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#hs-offcanvas-right">
           <FiSettings className="w-5 h-5"/>
          </button>

          <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
            <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
              <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700 flex gap-4">
                <div>
                    <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" /></div>
                <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300 ">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Managing Director</p>
                </div>
              </div>
              <div className="mt-2 py-2 first:pt-0 last:pb-0">
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  
                  View profile
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  
                  Admin Settings
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  
                  Preview as employee view
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center py-4">

      <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

      <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
          Application Layout
          <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </li>
        <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
          Dashboard
        </li>
      </ol>

    </div>
  </div>

  <div id="application-sidebar" className="bg-[#3168bc] hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
    <div className='flex flex-col justify-between h-full w-full'>
    <div className="px-6 flex justify-around">
        <img src={mhc} alt="" />
      <a className="flex-none text-lg font-semibold dark:text-white text-white mt-2 ml-1" href="#" aria-label="Brand">Make Health Connect</a>
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap self-start grow" data-hs-accordion-always-open>
      <ul className="space-y-1.5 text-white">
      <li><NavLink to={'/dashboard/Overview'} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md  hover:bg-[#10529c] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
          Overview
        </NavLink></li>

        <li><NavLink to={'/dashboard/Servicerequest'} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
          {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg> */}
          <SlNote/>
          Service Request
        </NavLink></li>

        <li><NavLink to={'/dashboard/task'} className="mr-3 flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
        <IoDocumentTextOutline className='h-4 w-4 '/>
          My Task
        </NavLink></li>

       

        <li className="hs-accordion" id="projects-accordion">
          <NavLink to={'/dashboard/Appointments'} className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5  hs-accordion-active:hover:bg-transparent text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
            Appointments

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3  group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3  group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </NavLink>

          <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Calender
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Book Appointments
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Modify Appointments
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  View Appointments
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="hs-accordion" id="projects-accordion">
          <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5  hs-accordion-active:hover:bg-transparent text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
            <VscTypeHierarchySub/>
            MHC Network

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3  group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3  group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </a>

          <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
             
              <li>
                <NavLink to={'/dashboard/doctor'} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Doctor Network
                </NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/clinic'} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Clinic Network
                </NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/company'} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  hover:bg-[#10529c] dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Company Network
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        
      </ul>
    </nav>
    <div className="space-y-1.5">
      <div>
          <a className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-md  text-white" href="javascript:;">
            <IoCallOutline fill='white'/>
            Support Contact - +61812345678
          </a>
        </div>
      </div>


    </div>
  </div>

  <div className="w-full  lg:pl-64">
    <Outlet />
    {/* {children} */}
  </div>
</div>
    </div>
  )
}

export default Layout