import NavList from '@/app/AppDomain/Components/WebContainers/NavList'
import SpaceBetween from '@/app/AppDomain/Components/WebContainers/SpaceBetween'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function MainNavigation() {
  return (
    <SpaceBetween className=' w-full  h-[120px] ' >

<div className=' CENTER flex-row gap-4 text-sm'>

  <Image  alt ='' src="/assets/logo.svg" width={30} height={30}/>
<NavList/>
</div>

<div className=' jah text-[25px] CENTER gap-4  '>

   <span className=' duration-300 hover:cursor-pointer hover:text-AppPrimary hover:text-[32px]'>Login</span>
   <span className=' duration-300 hover:cursor-pointer hover:text-AppPrimary hover:text-[32px]'>Signup</span>
</div>
  </SpaceBetween>
  )
}

export default MainNavigation
