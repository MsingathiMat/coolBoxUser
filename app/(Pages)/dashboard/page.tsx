import DesktopNav from '@/app/AppDomain/Components/DesktopNav'
import AdEventForm from '@/app/AppDomain/Components/Forms/AdEventForm'
import React from 'react'

function page() {
  return (
    <div className=' CENTER w-full h-full'>
  <DesktopNav/>

  <div className=' flex-1 '>


    <AdEventForm/>
  </div>
    </div>
  )
}

export default page
