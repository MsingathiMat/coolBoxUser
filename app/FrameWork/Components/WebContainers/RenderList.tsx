"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { isCallable, isString } from '../../Functions/Functions'


function RenderList({ListItems}:{ListItems:ListItems}) {
  return (
<>
 {

ListItems.map((item,_)=>{


const func = item.callBack as ()=>void 

  return <div key={item.itemLabel as string} className={cn(' hover:cursor-pointer',item.className?item.className:"")}>
   {



isCallable(item.callBack)?<span onClick={()=>{func()}} >{item.itemLabel}</span>:

isString(item.itemLabel)?<Link className=' ' href={item.callBack as string} >{item.itemLabel}</Link>:item.itemLabel
}
  </div>
 
  
  


  
})}</>)

}

export default RenderList
