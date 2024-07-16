import DesktopNav from '@/app/AppDomain/Components/DesktopNav'
import AdEventForm from '@/app/AppDomain/Components/Forms/AdEventForm'
import { ShadForm } from '@/app/AppDomain/Components/Forms/ShadForm'
import React from 'react'

function page() {
  return (
    <div className=' CENTER w-full h-full'>
  <DesktopNav/>

  <div className=' flex-1 CENTER '>


    <div className=' w-[600px] bg-slate-100 p-4 rounded-md'> 

<h1 className=' pb-8 text-xl text-gray-700 font-bold'>Add Event</h1>
    <ShadForm/>
    </div>
  </div>
    </div>
  )
}

export default page
