"use client"
import { ShadForm } from '@/app/AppDomain/Components/Forms/ShadForm'

import { EventTable } from '@/app/AppDomain/Components/Tables/EventTable'
import MattCont, { MattCheckBox, MattDatePicker, MattInput, MattRadioGroup, MattSelect, MattSubmit } from '@/app/FrameWork/Components/WebContainers/MatC'
import PageSection from '@/app/FrameWork/Components/WebContainers/PageSection'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import {TypeOf, z} from "zod"
function Page() {



  const FormSchema = z.object({

    UserName:z.string().min(1,"Username required"),
    Surname: z.string().min(1,"Required"),
    fruitType:z.union([z.literal("apple"),z.literal("banana")]),
    date:z.date(),
    radio:z.union([z.literal("default"), z.literal("comfortable"), z.literal("compact")]),
    Package: z.boolean()
  })


  const radioOptions=[{
    value: "default",
    label: "Default"
},

{
  value: "comfortable",
  label: "Comfortable"
},
{
  value: "compact",
  label: "Compact"
}
]
  const selectOptions=[{
    value: "apple",
    label: "Apple"
},
{
  value: "banana",
  label: "Banana"
}
]

const checkOptions=[{
  value: "option1",
  label: "Option 1"
},
{
value: "option2",
label: "option 2"
}
]





type SelectUnionType = keyof typeof selectOptions

  type FormType = z.infer<typeof FormSchema>

  const Methods = useForm<FormType>({

    resolver:zodResolver(FormSchema)
  })

 const OnSubmit= (data:FormType)=>{

  console.log(data)

 }
  return (
    <div className=' CENTER gap-4 w-full h-full p-4'>

<div className=' w-[600px] bg-slate-100 p-4 rounded-md'> 

<h1 className=' pb-8 text-xl text-gray-700 font-bold'>Add Event</h1>
    <ShadForm/>


    </div>

     <PageSection className=' CENTER'>

     <div className=' '>

     {/* <EventTable/> */}

     <MattCont Methods={Methods} GetFormData={OnSubmit} >

      <MattInput label='User Name ' name="UserName" placeholder='Your name'/>
      <MattInput label="Surname" name="Surname" placeholder='Your surname'/>
<MattSelect Options={selectOptions} name='fruitType' label="Fruit u Type"/>

<MattDatePicker name='date' label="Event Date"/>

<MattRadioGroup Options={radioOptions} name='radio' label="Radio Options"/>

<div className=' flex flex-col gap-1 items-start'>
<MattCheckBox name='Package' label="Package"/>
<MattCheckBox name='Vat' label="Vat"/>
</div>
   <MattSubmit>Save </MattSubmit>
     </MattCont>
     </div>
  
     </PageSection>
    </div>
  )
}

export default Page
