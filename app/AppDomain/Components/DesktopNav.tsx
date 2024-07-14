"use client"
import React, { useEffect, useState } from 'react'
import { FaCrown } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { PiChatsFill } from "react-icons/pi";
import { FaInbox } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";


import Link from 'next/link';
import Image from 'next/image';




import { usePathname } from 'next/navigation';


import { cn } from '@/lib/utils';


function DesktopNav() {

  const Path = usePathname()

  return (
    <div className=' bg-slate-50  z-40 pt-8 pb-4 hidden sm:flex flex-col   border-r-2  h-screen w-[80px]  items-center justify-between'>


<Image src={"https://api.codeddesign.org.za/uploads/logo.svg"} width={40} height={40} alt='CollBox'/>



<div className='flex flex-col gap-5 h-[400px]'>



 

<Link href='/'>


<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<MdHomeFilled className={cn(' text-[#4A4B4B]',Path=="/"?" text-purple-500":" "   )} size={28} />




</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Home</label>
 </div>
</Link>

 <Link href="">
 <div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<FaUserGroup  className={cn(' text-[#4A4B4B]',Path=="/users"?" text-purple-500":" "   )} size={28} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Users</label>
 </div></Link>
 

 <Link href="">
 
 <div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<PiChatsFill  className={cn(' text-[#4A4B4B]',Path=="/hotlists"?" text-purple-500":" "   )} size={28}/>

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Hotlists</label>
 </div >
 </Link>





<Link href="/dashboard/activity">
<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<FaRegBell className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Activity</label>
 </div>
</Link>




<Link href="search">
<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<IoMdSearch className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Search</label>
 </div>
</Link>

 <div className='flex relative group '>




<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Create</label>
 </div >


 
 
</div>


<div className='CENTER flex-col'>
<HiDotsHorizontal />


<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>


<div className='CENTER pt-2 w-10 hover:bg-gray-300  h-10 rounded-md text-ApppTertiary'> 


</div>

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-[68px]    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40'>Options</label>
 </div >




</div>
    </div>

    
  )
}

export default DesktopNav







 
