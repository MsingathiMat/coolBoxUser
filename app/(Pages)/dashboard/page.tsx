"use client"
import DesktopNav from '@/app/AppDomain/Components/DesktopNav'
import AdEventForm from '@/app/AppDomain/Components/Forms/AdEventForm'
import { ShadForm } from '@/app/AppDomain/Components/Forms/ShadForm'
import { AppStats } from '@/app/FrameWork/Components/Shadcn/AppStats'
import PageSection from '@/app/FrameWork/Components/WebContainers/PageSection'
import PageView from '@/app/FrameWork/Components/WebContainers/PageView'
import { ArrowBigRight, ArrowRight, Coins, ListMusic, Ticket } from 'lucide-react'
import React, { useState } from 'react'
import { AppOptions, AppSelect } from './AppSelect'

function Page() {
  const [selectedValue, setSelectedValue] = useState<string>('Mastered');

  return (
    <div className='CENTER w-full h-full flex-col p-8'>
      <div id="STATS" className='!justify-start CENTER gap-4 w-full '>
        <AppStats className="text-[#21DA67]" description='Profit for this month' title='R565' icon={<Coins color="#21DA67" size={30}/>}/>
        <AppStats className="text-[#E1288B]" description='Orders for this month' title='786' icon={<ListMusic color="#E1288B" size={30}/>}/>
        <AppStats className="text-[#A02CDA]" description='Events for this month' title='56' icon={<Ticket color="#A02CDA" size={30}/>}/>
      </div>

     

      <PageSection className=''>
        section
      </PageSection>
    </div>
  )
}

export default Page
