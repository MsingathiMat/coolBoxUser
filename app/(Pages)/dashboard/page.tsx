import DesktopNav from '@/app/AppDomain/Components/DesktopNav'
import AdEventForm from '@/app/AppDomain/Components/Forms/AdEventForm'
import { ShadForm } from '@/app/AppDomain/Components/Forms/ShadForm'
import React from 'react'

function page() {
  return (
    <div className=' CENTER w-full h-full'>
  <DesktopNav/>

  <div className=' flex-1 '>


    <div className=' w-[300px] bg-slate-100 p-4 rounded-md'> 

    <ShadForm/>
    </div>
  </div>
    </div>
  )
}

export default page
