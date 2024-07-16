import { ShadForm } from '@/app/AppDomain/Components/Forms/ShadForm'
import React from 'react'

function page() {
  return (
    <div className=' w-[600px] bg-slate-100 p-4 rounded-md'> 

    <h1 className=' pb-8 text-xl text-gray-700 font-bold'>Add Event</h1>
        <ShadForm/>
        </div>
  )
}

export default page
