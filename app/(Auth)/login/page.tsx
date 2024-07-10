import PageSection from '@/app/AppDomain/Components/WebContainers/PageSection'
import PageView from '@/app/AppDomain/Components/WebContainers/PageView'
import LoginForm from '@/app/ProblemDomain/components/Forms/LoginForm'
import Link from 'next/link'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

function Page() {
  return (
    <PageView  >
      
      <section className=' CENTER flex-col gap-11'>
      <LoginForm/>

     <div className=' CENTER flex-row gap-2'>

 <FaRegUser className=' text-gray-600 text-sm' />
 <span className=' text-[12px]'>or you can <Link href="/register" className=' text-AppPrimary underline hover:text-ApppTertiary hover:cursor-pointer'>REGISTER</Link></span>
     </div>
      </section>
    
    </PageView>
  )
}

export default Page
