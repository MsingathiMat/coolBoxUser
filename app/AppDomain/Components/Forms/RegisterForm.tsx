"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {reset}=useForm()
const SavaUser =  AddUser()
  const FormSchema = z.object({
    userName: z.string().min(1, 'User Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string(),
    handle: z.string(),
    mobile: z.string(),
    role: z.string()
  });

  const FormResolver = zodResolver(FormSchema);

  type FormType = z.infer<typeof FormSchema>;
  const OnFormSubmit: SubmitHandler<FormType> = (data) => {
    setIsLoading(true)
 

    SavaUser.mutateAsync({ endPoint:"https://api.codeddesign.org.za/user",
      formData:data,reset:reset}).then((data)=>{


        setIsLoading(false)
      }).catch(()=>{

        setIsLoading(false)
      })


 
 
  };

  return (

    <div className=" text-gray-700 CENTER flex-col gap-2" >
 <h1>Signup</h1>

    
    <MattContainer
      className=" h-[250px]  rounded-md "
      classLabel=" "
      getFormData={OnFormSubmit}
      resolver={FormResolver}
   valueList={{password:"",handle:"",mobile:"",role:UserRole.User}}
    >
      <Input
        type="text"
        {...{ name: "userName", label: "Your Name" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />

    
      <Input
        type="email"
        {...{ name: "email", label: "Your Email" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <LoadingWrapper {...{ type: "submit" }} isLoading={isLoading}>
        <Button type="submit" className="  bg-gray-700 hover:bg-AppSecondary">
          Register
        </Button>
      </LoadingWrapper>
    </MattContainer>
    </div>
  );
}

export default RegisterForm;
