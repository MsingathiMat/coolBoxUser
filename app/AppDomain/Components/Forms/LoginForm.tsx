"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { PulseLoader } from "react-spinners";
import LoadingWrapper from "@/app/FrameWork/Components/LoadingWrapper";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import MattContainer from "@/app/FrameWork/Components/WebContainers/MattContainer";
import { useAtom } from "jotai";
import { userAtom } from "../../Store/JotaiAtoms/UserAtom";
import { GetUserByEmail } from "../../Api/ReactQuery";
import { UserType } from "../../Types/Types";


function LoginForm() {

  const {read} = useInnter()
  const [email,setEmail]=useState("")
  const {refetch, data:LoginData}=   GetUserByEmail("User",email)

  const [isLoading, setIsLoading] = useState(false);
  const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    password: z.string().min(1, "Password is required"),
  });

  const [_,SetUser]= useAtom(userAtom)
  const FormResolver = zodResolver(FormSchema);

  type FormType = z.infer<typeof FormSchema>;
  const OnFormSubmit: SubmitHandler<FormType> = (data) => {
   

    read<UserType[]>("https://api.codeddesign.org.za/users",{email:data.name}).then((data)=>{

      console.log(data[0].password)

    }).catch((error)=>{

console.log(error)
    })
    // setIsLoading(true);
    SetUser({
      userName:"Matthew",
      surname:"Hlazo",
      role:"Owner",
      email:"matthew@gmail.com"
    })
   
  };

  return (
    <MattContainer
      className=" h-[180px]  rounded-md "
      classLabel=" "
      getFormData={OnFormSubmit}
      resolver={FormResolver}
    >
      <Input
        {...{ name: "name", label: "User Name" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Input
        type="password"
        {...{ name: "password", label: "Password" }}
        className="  focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <LoadingWrapper {...{ type: "submit" }} isLoading={isLoading}>
        <Button type="submit" className="  bg-AppPrimary hover:bg-AppSecondary">
          Login
        </Button>
      </LoadingWrapper>
    </MattContainer>
  );
}

export default LoginForm;
