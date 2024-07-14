"use client"
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
    
    <PageView className=" bg-AppBg relative overflow-clip flex-col lg:px-0  ">


<LoadingWrapper isLoading={loggedIn} >

{children}

</LoadingWrapper>
    </PageView>

  
  )
}

export default Layout
