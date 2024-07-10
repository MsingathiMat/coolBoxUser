"use client"

import MattContainer from '@/components/MattContainer/MattContainer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useInnter } from '@/components/useInnter'
import { zodResolver } from '@hookform/resolvers/zod'

import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import * as z from 'zod'
import LoginForm from './ProblemDomain/components/Forms/LoginForm'
import Loader from './AppDomain/Components/Loader'
import PageView from './AppDomain/Components/WebContainers/PageView'
import PageSection from './AppDomain/Components/WebContainers/PageSection'
import SpaceBetween from './AppDomain/Components/WebContainers/SpaceBetween'
import MainNavigation from './ProblemDomain/components/MainNavigation'
import Modal from './ProblemDomain/AppDeclarations/Modal'

function Page() {


  return (
   <PageView className=" bg-AppBg ">

<PageSection center className='  w-full flex-col'>

<MainNavigation/>

<PageSection  >

Just Another Hand
</PageSection>

</PageSection>

   </PageView>
  )
}

export default Page
