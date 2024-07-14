"use client"
import UserNavigation from '@/app/AppDomain/Components/UserNavigation'
import PageSection from '@/app/FrameWork/Components/WebContainers/PageSection'
import PageView from '@/app/FrameWork/Components/WebContainers/PageView'
import { verifyJWT } from '@/app/FrameWork/lib/jwt'
import { useRouter } from 'next/navigation'

import React, { useEffect } from 'react'

function Layout({children}:{children:Readonly<React.ReactNode>}) {



  return (
    <PageView className=" bg-AppBg relative overflow-clip flex-col lg:px-0  ">
 <UserNavigation/>
    <PageSection center className='  w-full flex-row'>
    
   
    <PageSection className='   w-[300px] '>

        left
    </PageSection>
    
   
    <PageSection center className=' bg-AppMutedBg p-6   w-full flex-col flex-1 justify-start items-start '>
    
    {children}
    </PageSection>

    <PageSection className='   w-[300px]'>

left
</PageSection>
    </PageSection>
    
    
        </PageView>
  )
}

export default Layout
