"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { PulseLoader } from "react-spinners";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import MattContainer from "@/app/FrameWork/Components/WebContainers/MattContainer";
import LoadingWrapper from "@/app/FrameWork/Components/LoadingWrapper";
import { UserRole } from "../../AppDeclarations/Constants";
import { AddUser } from "../../Api/ReactQuery";
import { ImageMinus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { AppDatePicker } from "../ShadCN/AppDatePicker";
import { Calendar } from "@/components/ui/calendar";

function AdEventForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {reset}=useForm()
const SavaUser =  AddUser("SuperUser")
  const FormSchema = z.object({
    eventName: z.string().min(1, 'Event Name is required'),
    description: z.string().min(1,"Description is required"),
    lineUp: z.string(),
    date: z.string().min(1,"Date is required"),
    venue: z.string().min(1,"Venue is required"),
    time: z.string().min(1,"time is required"),
    eventType : z.string().min(1,"Type is required"),
    poster:  z.instanceof(FileList).refine((files) => files.length > 0, {
      message: 'File is required',
    })
  });

  const FormResolver = zodResolver(FormSchema);

  type FormType = z.infer<typeof FormSchema>;
  const OnFormSubmit: SubmitHandler<FormType> = (data) => {
    setIsLoading(true)
 

    console.log(data)
    // SavaUser.mutateAsync({ endPoint:"https://api.codeddesign.org.za/user",
    //   formData:data,reset:reset}).then((data)=>{


    //     setIsLoading(false)
    //   }).catch(()=>{

    //     setIsLoading(false)
    //   })


 
 
  };

  const [file, setFile] = useState("No file ");
  const [fileProgress, setFileProgress] = useState<number>(0);

 
 
// const DateWrapper = ({children}:{children:React.ReactNode})=>{

//   return <AppDatePicker></AppDatePicker>
// }

  const InputLabel =()=><label
    htmlFor="ImageInput"
    className=" group hover:bg-green-300 hover:cursor-pointer   bg-slate-50 pl-4 pr-4 rounded-md flex gap-2 justify-center items-center w-[200px] h-[50px]"
  >
    <ImageMinus className=" text-slate-400 group-hover:text-white" />
    <span className=" text-[12px] text-slate-400 group-hover:text-white flex-1 truncate ">
      {file}
    </span>
  
    <span>{fileProgress}</span>
  </label>
  
  return (

    <div className=" text-gray-700 CENTER flex-col gap-2" >
 <h1>AddProject</h1>

    
    <MattContainer  watchErrors
      className=" h-fit  rounded-md "
      classLabel=" "
      getFormData={OnFormSubmit}
      resolver={FormResolver}
   valueList={{password:"user",handle:"",mobile:"",role:UserRole.User}}
    >
      <Input
        type="text"
        {...{ name: "eventName", label: "Event Name" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />


<input {...{  name: "date", label: "Event Date" }} type="date"/>

<Input
        type="text"
        {...{ name: "venue", label: "Event Venue" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />

<input {...{  name: "time", label: "Event Date" }} type="time"/>


 <Textarea   {...{ name: "description", label: "Description" }} placeholder="Event description"   className=" resize-none  focus-visible:ring-0 focus-visible:ring-offset-0"  />

<input
 {...{ name: "poster", render: InputLabel,Label:"Event Poser", file:true, ChangerMethod:"onChange", ChangedValue:setFile }}
              accept="image/*"
             hidden
              id="ImageInput"
              type="file"
              className="  text-gray-400 outline-none pl-4 rounded-md w-[200px] h-[30px] text-[12px]"
            />


      <LoadingWrapper {...{ type: "submit" }} isLoading={isLoading}>
        <Button type="submit" className="  bg-gray-700 hover:bg-AppSecondary">
          Save
        </Button>
      </LoadingWrapper>
    </MattContainer>
    </div>
  );
}

export default AdEventForm;
