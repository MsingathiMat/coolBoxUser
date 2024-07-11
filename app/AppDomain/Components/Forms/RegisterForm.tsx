"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { PulseLoader } from "react-spinners";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import MattContainer from "@/app/FrameWork/Components/WebContainers/MattContainer";
import LoadingWrapper from "@/app/FrameWork/Components/LoadingWrapper";


function RegisterForm() {


  const [isLoading, setIsLoading]= useState(false)
  const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    password: z.string().min(1, "Password is required"),
  });

 
  const FormResolver = zodResolver(FormSchema);

  type FormType = z.infer<typeof FormSchema>;
  const OnFormSubmit: SubmitHandler<FormType> = (data) => {
    const { read } = useInnter();


    setIsLoading(true)
    const Rd = read<any>("https://api.codeddesign.org.za/users", {});

    Rd.then((data) => console.log(data));
  };

  return (

  
  
  
  <MattContainer
      className=" h-[180px]  rounded-md "
      classLabel=" "
      getFormData={OnFormSubmit}
      resolver={FormResolver}
    >
      <Input type="text"
        {...{ name: "name", label: "Your Name" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />
       <Input type="email"
        {...{ name: "email", label: "Your Email" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    
      <LoadingWrapper {...{type:"submit"}} isLoading={isLoading}  >

      <Button type="submit" className="  bg-gray-700 hover:bg-AppSecondary">
       Register
      </Button>
      </LoadingWrapper>
     
    </MattContainer>

    
  );
}

export default RegisterForm;
