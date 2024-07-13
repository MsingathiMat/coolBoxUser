import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppCard } from './AppCard'
import { AppSlider } from './AppSlider'

function AppTabs() {
  return (
    <Tabs defaultValue="account" className="w-full h-full">
    <TabsList className=' '>
      <TabsTrigger value="events" className=' text-[12px]'>Events</TabsTrigger>
      <TabsTrigger value="foryou" className=' text-[12px]'>For you</TabsTrigger>
      <TabsTrigger value="orders" className=' text-[12px]'>Orders</TabsTrigger>
    </TabsList>
    <TabsContent value="events" className=' h-[500px]  w-[850px]'>


<div><AppSlider/></div>
       
    </TabsContent>
    <TabsContent value="foryou" className='h-[500px]  w-[850px] '>Change your password here.</TabsContent>
    <TabsContent value="orders" className=' h-[500px]  w-[850px] '>Orders</TabsContent>
  </Tabs>
  
  )
}

export default AppTabs
