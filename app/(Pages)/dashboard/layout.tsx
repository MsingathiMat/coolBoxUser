"use client"
import DesktopNav from '@/app/AppDomain/Components/DesktopNav'
import { userAtom } from '@/app/AppDomain/Store/JotaiAtoms/UserAtom'
import LoadingWrapper from '@/app/FrameWork/Components/LoadingWrapper'
import PageView from '@/app/FrameWork/Components/WebContainers/PageView'
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
    
    <PageView className=" bg-AppBg relative overflow-clip  flex-col sm:px-0 lg:px-0 xl:px-0 2xl:px-0    ">


<LoadingWrapper isLoading={loggedIn} >

<div className=' CENTER w-full h-full'>
  <DesktopNav/>

  <div className=' flex-1 CENTER h-full w-full '>

  {children}
 
  </div>
    </div>



</LoadingWrapper>
    </PageView>

  
  )
}

export default Layout
