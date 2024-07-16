import DesktopNav from '@/app/AppDomain/Components/DesktopNav'
import AdEventForm from '@/app/AppDomain/Components/Forms/AdEventForm'
import { ShadForm } from '@/app/AppDomain/Components/Forms/ShadForm'
import { AppStats } from '@/app/FrameWork/Components/Shadcn/AppStats'
import PageSection from '@/app/FrameWork/Components/WebContainers/PageSection'
import PageView from '@/app/FrameWork/Components/WebContainers/PageView'
import { ArrowBigRight, ArrowRight, ListMusic, Ticket } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className=' CENTER w-full h-full flex-col p-8 '>
<div id="STATS" className=' CENTER gap-4 w-full  justify-start '>

 
 <AppStats className=" text-[#E1288B]" description='Orders for this month' title='786' icon={<ListMusic color="#E1288B" size={30}/>}/>
 <AppStats className=" text-[#21DA67]" description='Events for this month' title='56' icon={<Ticket color="#21DA67" size={30}/>}/>

</div>


<PageSection className=''>

  section
</PageSection>
    </div>
  )
}

export default page
