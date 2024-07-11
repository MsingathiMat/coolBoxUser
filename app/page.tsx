"use client"


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'

import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import * as z from 'zod'

import Image from 'next/image'
import PageView from './FrameWork/Components/WebContainers/PageView'
import PageSection from './FrameWork/Components/WebContainers/PageSection'
import MainNavigation from './AppDomain/Components/MainNavigation'

function Page() {


  return (
   <PageView className=" bg-AppBg relative overflow-clip  ">

<PageSection center className='  w-full flex-col'>

<MainNavigation/>

<PageSection  className=' px-[60px] CENTER  gap-14 mb-[100px] ' >

<div className=' absolute -left-[350px] rotate-12  bg-AppPrimary w-[500px] h-[500px] rounded-[60px]'/>



<Image  alt ='' src="/assets/phone.png" width={400} height={400} className='  top-[200px]'/>

<div className='w-[400px]  text-center CENTER flex-col gap-6 '>

  <h1 className=' text-2xl'>Cool <span className=' font-bold'>Box</span></h1>
  <p className=''>Whether you&apos;re at a club, a wedding, or a private party, Cool<span className=' font-bold'>Box</span> puts the power of the playlist in your hands. </p>

<Button className=' bg-AppPrimary hover:bg-AppSecondary px-6' >Get Started</Button>


</div>
<div className=' absolute right-[50px] -bottom-[320px] rotate-12  bg-AppPrimary w-[700px] h-[500px] rounded-[60px]'/>
</PageSection>

</PageSection>

   </PageView>
  )
}

export default Page
