"use client"
import UserNavigation from '@/app/AppDomain/Components/UserNavigation'
import { userAtom } from '@/app/AppDomain/Store/JotaiAtoms/UserAtom'
import LoadingWrapper from '@/app/FrameWork/Components/LoadingWrapper'
import PageSection from '@/app/FrameWork/Components/WebContainers/PageSection'
import PageView from '@/app/FrameWork/Components/WebContainers/PageView'
import { verifyJWT } from '@/app/FrameWork/lib/jwt'
import axios from 'axios'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

function Layout({children}:{children:Readonly<React.ReactNode>}) {

  const {push} = useRouter()
  const [UserData, setUser] = useAtom(userAtom)
  const [loggedIn, setLoggedIn] = useState(true)


 useEffect(()=>{

  const fetch =async()=>{
    await axios.get('/api/auth').then(data=>{

  
    if(data.data.success){

      setUser(data.data.data.data)
      // console.log(data.data.data.data)
    }else{


    }
      setLoggedIn(false)

  

    }).catch(error=>{
     
      push("/login")
    })

  }

  fetch()
 },[loggedIn])

  return (
    <PageView className=" bg-AppBg relative overflow-clip flex-col lg:px-0  ">
 <LoadingWrapper isLoading={loggedIn} >

 <>
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
    </>
 </LoadingWrapper>
   
    
        </PageView>
  )
}

export default Layout
