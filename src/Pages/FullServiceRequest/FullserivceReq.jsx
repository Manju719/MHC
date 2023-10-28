import React from 'react'
import ServiceTop from '../../Components/ServiceRequest/ServiceTop'
import Servicecards from '../../Components/ServiceRequest/Servicecards'
import ServicerequestTable from '../../Components/ServiceRequest/ServicerequestTable'

const FullserivceReq = () => {
  return (
    <div>
        <ServiceTop/>
        <Servicecards/>
        <ServicerequestTable/>
    </div>
  )
}

export default FullserivceReq