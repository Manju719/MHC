import React, { Suspense , lazy } from 'react'
import Layout from './Components/Common/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Assigned from './Components/MyTask/Assigned';
import Openrequest from './Components/MyTask/Openrequest';
import Closedrequest from './Components/MyTask/Closedrequest';
import Escalations from './Components/MyTask/Escalations';
import Completedrequest from './Components/MyTask/Completedrequest';
import ClinicNetwork from './Pages/MHC_Network/CNetwork/ClinicNetwork';
import DoctorNetwork from './Pages/MHC_Network/DNetwork/DoctorNetwork';
import CompanyNetwork from './Pages/MHC_Network/ComNetwork/CompanyNetwork';
import FullserivceReq from './Pages/FullServiceRequest/FullserivceReq';
// import Mytask from './Pages/MyTask/Mytask';


const Login = lazy(()=>import('./Auth/Login')); 
const Overview = lazy(()=>import('./Pages/Overview/Overview')); 
const MyTask = lazy(()=>import('./Pages/MyTask/Mytask')); 
const Appointments = lazy(()=>import('./Pages/Appointments/Appointments')); 
// const MHC_network = lazy(()=>import('./Pages/MHC_Network/Network')); 


const App = () => {
  return (
   
    <BrowserRouter>
<Suspense>
  <Routes>
    <Route path='/' element={<Login/>}/>

    <Route path='/dashboard' element={<Layout />}>

    <Route path='Overview' element={<Overview/>} />
    <Route path='Servicerequest' element={<FullserivceReq/>} />

    <Route path='task' element={<MyTask/>}>

      <Route path='assigned' element={<Assigned/>}/>
      <Route path='open' element={<Openrequest/>}/>
      <Route path='closed' element={<Closedrequest/>}/>
      <Route path='escalation' element={<Escalations/>}/>
      <Route path='completed' element={<Completedrequest/>}/>

    </Route>

    <Route path='Appointments' element={<Appointments/>} />
    <Route path='clinic' element={<ClinicNetwork/>} />
    <Route path='doctor' element={<DoctorNetwork/>} />
    <Route path='company' element={<CompanyNetwork/>} />

    </Route>

    
      
  
  </Routes>
</Suspense>
</BrowserRouter>


    
  )
}

export default App
