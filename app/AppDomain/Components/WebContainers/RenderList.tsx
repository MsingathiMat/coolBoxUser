"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { isCallable } from '../../Functions/Functions'


function RenderList({ListItems}:{ListItems:ListItems}) {
  return (
<>
 {

ListItems.map((item,_)=>{


const func = item.callBack as ()=>void 
console.log(func)
  return <div key={item.itemLabel} className={cn(' hover:cursor-pointer',item.className?item.className:"")}>
   {



isCallable(item.callBack)?<span onClick={()=>{func()}} >{item.itemLabel}</span>:
<Link className=' ' href={item.callBack as string} >{item.itemLabel}</Link>
}
  </div>
 
  
  


  
})}</>)

}

export default RenderList
