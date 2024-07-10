import PageView from '@/app/AppDomain/Components/WebContainers/PageView'
import LoginForm from '@/app/ProblemDomain/components/Forms/LoginForm'
import RegisterForm from '@/app/ProblemDomain/components/Forms/RegisterForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

function Page() {
  return (
    <PageView className=' bg-AppBg'>
      
      <section className=' CENTER flex-col gap-11'>

      <Image  alt ='' src="/assets/logoPrimary.svg" width={55} height={55}/>
      <RegisterForm/>

     <div className=' CENTER flex-row gap-2'>

 <FaRegUser className=' text-gray-600 text-sm' />
 <span className=' text-[12px]'>or you can <Link href="/login" className=' text-AppPrimary underline hover:text-ApppTertiary hover:cursor-pointer'>LOGIN</Link></span>
     </div>
      </section>
    
    </PageView>
  )
}

export default Page
