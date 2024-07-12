import UserNavigation from '@/app/AppDomain/Components/UserNavigation'
import PageSection from '@/app/FrameWork/Components/WebContainers/PageSection'
import PageView from '@/app/FrameWork/Components/WebContainers/PageView'
import React from 'react'

function layout({children}:{children:Readonly<React.ReactNode>}) {
  return (
    <PageView className=" bg-AppBg relative overflow-clip flex-col lg:px-0  ">
 <UserNavigation/>
    <PageSection center className='  w-full flex-row'>
    
   
    <PageSection className='   w-[300px] '>

        left
    </PageSection>
    
   
    <PageSection center className='   w-full flex-col flex-1'>
    
    {children}
    </PageSection>

    <PageSection className='   w-[300px]'>

left
</PageSection>
    </PageSection>
    
    
        </PageView>
  )
}

export default layout
