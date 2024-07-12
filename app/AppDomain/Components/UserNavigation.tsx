"use client"

import NavList from '@/app/FrameWork/Components/WebContainers/NavList'
import SpaceBetween from '@/app/FrameWork/Components/WebContainers/SpaceBetween'
import { Button } from '@/components/ui/button'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { userAtom } from '../Store/JotaiAtoms/UserAtom'
import { useRouter } from 'next/navigation'
import AppMenuBar from '@/app/FrameWork/Components/Shadcn/AppMenuBar'
import RenderNavigation from '@/app/FrameWork/Components/Shadcn/RenderNavigation'

function UserNavigation() {
    const Router = useRouter()
    const [UserData,setUser] = useAtom(userAtom)

    if(!UserData){

        Router.push("/login")
    }
  return (
    <SpaceBetween className=' w-full  h-[80px] bg-slate-50 px-8 ' >

<div className=' CENTER flex-row gap-4 text-sm'>

  <Image  alt ='' src="/assets/logo.svg" width={30} height={30}/>
<NavList/>
</div>

<RenderNavigation/>

<div className=' text-[25px] CENTER gap-2  '>

<div className=' CENTER bg-black w-[30px] h-[30px] rounded-full text-white text-sm'>
    {UserData?.userName[0]}
</div>
   <span onClick={()=>{setUser(null)}} className='jah  duration-300 hover:cursor-pointer hover:text-AppPrimary hover:text-[32px]'>Logout</span>
 
</div>
  </SpaceBetween>
  )
}

export default UserNavigation
