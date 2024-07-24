import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {  FormProvider, useFormContext, FieldValues, UseFormReturn, SubmitHandler, FieldError, Merge, FieldErrorsImpl, Controller, Control } from "react-hook-form"


import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { boxClasses, dividerClasses } from "@mui/material"
import { Checkbox } from "@/components/ui/checkbox"


type ChildClass={
    children: React.ReactNode,
    className?: string
}

type OptionType = 
  {value:string, label:string}

export default function MattCont<T extends FieldValues>({Methods, children, GetFormData}:{Methods:UseFormReturn<T, any, undefined>,children:React.ReactNode, GetFormData:(data:T)=>void}) {

  


  return (
    <FormProvider {...Methods}>
   
      <form onSubmit={Methods.handleSubmit(GetFormData)} className=" flex-col w-[300px] bg-slate-100 p-4 rounded-md CENTER gap-4">

     {children}
       
       <pre>

        {JSON.stringify(Methods.watch(),null,2)}
       </pre>
      </form>
    </FormProvider>
  )
}


function MattInput({className,name, label,placeholder}:{name:string ,placeholder?:string,label:string, className?:string}) {
  const { register,formState:{errors} } = useFormContext() 
  
return (

  <>
<LabelWrapper error={errors?.[name]?.message}  label={label}>
<Input {...register(name)} placeholder={placeholder} className={cn(" placeholder:text-gray-300",className)} /> 
  
</LabelWrapper>



</>
)
 
}

function MattSubmit({children,className}:ChildClass) {
   
  return <Button  className={className}>{children}</Button>
  }



  const LabelWrapper = ({className,label,error, children}:{className?:string,label:string,error:string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined, children:React.ReactNode})=>{

    return (

      <div>
      <div className={cn(" flex gap-1  items-center pb-1",className)}>
    <label className=" text-gray-600 text-[14px]" >{label}</label>
      <p className=" text-red-600 text-[12px] ">{error as string}</p>
      </div>
{children}
      </div>
    )
  }








 function MattSelect({className,name, label, Options}:{name:string ,label:string, Options:OptionType[],className?:string}) {

  const { control, register } = useFormContext() 
  return (
 <div>
<Controller

name={name}

control={control}
rules={{required:{value:true,message:"Select required"}}}

render={({field,formState:{errors}})=>(


<LabelWrapper className="  flex-col"  error={errors?.[name]?.message}  label={label}>
<Select  onValueChange={field.onChange}>
  <SelectTrigger className={cn("w-[180px]",className)}>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
     {Options?.map((value)=>(

<SelectItem key={value.value} value={value.value}>{value.label}</SelectItem>
     ))}
      
    </SelectGroup>
  </SelectContent>
</Select>
</LabelWrapper>
)}
/>

 </div>
  )
}

function MattRadioGroup({Options, className,name, label}:{name:string ,label:string,className?:string, Options:OptionType[]}) {

  const { control } = useFormContext() 
  return (
 <div>
<Controller

name={name}

control={control}
rules={{required:{value:true,message:"Select required"}}}

render={({field,formState:{errors}})=>(


<LabelWrapper className="  flex-col"  error={errors?.[name]?.message}  label={label}>
<RadioGroup   onValueChange={field.onChange} >
      
      {

Options?.map((value)=>(

  <div key={value.value} className={cn(" mt-1 flex items-center space-x-2",className)}>
  <RadioGroupItem value={value.value} id={value.value} />
  <Label htmlFor={value.value}>{value.label}</Label>
</div>
))
      }
      
    
    </RadioGroup>
</LabelWrapper>
)}
/>

 </div>
  )
}


function MattCheckBox({className,name, label}:{name:string ,label:string, className?:string}) {
  const {control} = useFormContext() 
  
return (

  <>

<Controller

name={name}

control={control}
rules={{required:{value:true,message:"Select required"}}}

render={({field,formState:{errors}})=>(

<div className=" flex  gap-2 justify-center items-center">

<Checkbox className="mb-[5px]"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />

<LabelWrapper error={errors?.[name]?.message}  label={label}>
<p></p>
</LabelWrapper>
</div>

)}
/>


</>
)
 
}

function MattDatePicker({name, label, className}:{name:string ,label:string, className?:string}) {
  const [date, setDate] = React.useState<Date>()
  const { control, register,setValue } = useFormContext() 

 
  return (
 <div>
<Controller

name={name}

control={control}
rules={{required:{value:true,message:"Select required"}}}

render={({field,formState:{errors}})=>(


<LabelWrapper error={errors?.[name]?.message}  label={label}>
<Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <Select

       
          onValueChange={(value) =>{

            const NewDate = addDays(new Date(), parseInt(value))
             setDate(NewDate)
          
             field.onChange(NewDate);
          }
           

          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={field.onChange} />
        </div>
      </PopoverContent>
    </Popover>
</LabelWrapper>
)}
/>

 </div>
  )
}






export type {OptionType}
export {MattCont,MattInput,MattSubmit, MattSelect, MattDatePicker,MattRadioGroup,MattCheckBox}