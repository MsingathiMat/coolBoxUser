"use client";
import Image from "next/image";

import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import LabeledInput from "./LabeledInput";
import LabeledTextArea from "./LabeledTextArea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, ImageMinus } from "lucide-react";
import { useInnter } from "../HOOKS/useInnter";
import { AddUser, GetNextRecordId, MutateUpload } from "../REACTQUERY/quries";
import { useQueryClient } from "@tanstack/react-query";
import { GetAllUsers, GetNumberOfRows } from '@/attlr/REACTQUERY/quries'
import { useRouter } from 'next/navigation';

function FormA() {
  // Initial state
  const initialState: UserSave = {
    userName: "",
    userType: "",
    email: "",
    mobile: "",
    handle: "",
    password: "",
    imageUrl: "https://api.codeddesign.org.za/uploads/default.png",
  };

  const [file, setFile] = useState<File>();
  const [fileProgress, setFileProgress] = useState<number>(0);
  const { isLoading: loadingNext, data: nextId } = GetNextRecordId("userId", "Users");
  const UploadFile = MutateUpload();
  const saveData = AddUser();
  const [imageLink, setImageLink] = useState<string | null>(null);

  const {refetch:RefetchUsers} = GetAllUsers()
  const { refetch:RefetchRows} = GetNumberOfRows();
     
  const Router = useRouter()
  const QryClient =useQueryClient()
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      setFile(selectedFile);
    }

  };

  const getLabel = () => {
    return file ? file.name : "No profile picture";
  };

  const YupValidation = yup
    .object({
      userName: yup.string().required("Missing user Name"),
      userType: yup.string().required("Missing User Type"),
      email: yup.string().required("Missing Email Address"),
      mobile: yup.string().required("Missing Mobile Number"),
      handle: yup.string().required("Missing user Name"),
      password: yup.string().required("Missing Password "),
      imageUrl: yup.string().default("defaultynone"),
    })
    .required();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(YupValidation),
    defaultValues: initialState,
  });
  const [IsLoading, setIsLoading] = useState(false);

 
  type Action =
    | { type: "SET_FIELD"; field: keyof User; value: string }
    | { type: "RESET_FORM" };

  // Reducer function
  const reducer = (state: UserSave, action: Action): UserSave => {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

 

  const onSubmit = (data: any) => {
   
    if (file) {
      const formData = new FormData();

   
      if (nextId) {
        const imageName = `${nextId.toString()}.jpg`;
        formData.append("file", file, imageName);

        const ImageLink = `https://api.codeddesign.org.za/uploads/${imageName}`;
        UploadFile.mutateAsync({
          endPoint: "https://api.codeddesign.org.za/upload",
          formData: formData,
          setFileProgress: setFileProgress,
          UserData: { ...data, imageUrl: ImageLink },
          reset,
        }).then(async()=>{

         
        });
      }

     
    } else {
     

      saveData.mutateAsync({
        endPoint:"https://api.codeddesign.org.za/user",
        formData:data,reset:reset
      }).then(()=>{

       
      })

    }
  };

  return (
    <>
      {IsLoading ? (
        <div>Loading......</div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:flex sm:flex-row sm:gap-10 items-start w-full mb-4"
        >
          <div className=" mt-10 sm:mt-0 bg-slate-100 p-4 rounded-md w-[260px] flex flex-col gap-4  items-center justify-center">
            <p className="text-[#101038] font-bold text-[14px]">
              Add new user{" "}
            </p>

            <LabeledInput HookFormProps={register("userName")} label="Name" />

            <Controller
              name="userType"
              control={control}
              rules={{ required: "Select User Type" }}
              render={({ field }) => (
                <div className="w-[200px] h-[30px]">
                  <Select onValueChange={field.onChange} value={field.value} >
                    <SelectTrigger id="fruit" className="focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select User Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Patron">Patron</SelectItem>
                      <SelectItem value="DJ">DJ</SelectItem>
                      <SelectItem value="Organizer">Organizer</SelectItem>
                      <SelectItem value="Owner">Owner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />

            <LabeledInput HookFormProps={register("email")} label="Email" />

            <LabeledInput
              HookFormProps={register("mobile")}
              label="Mobile Number"
            />

            <LabeledInput HookFormProps={register("handle")} label="Handle" />

            <input hidden {...register("imageUrl")} />

            <LabeledInput
              HookFormProps={register("password")}
              label="Password"
            />

            <label
              htmlFor="ImageInput"
              className=" group hover:bg-green-300 hover:cursor-pointer   bg-slate-50 pl-4 pr-4 rounded-md flex gap-2 justify-center items-center w-[200px] h-[50px]"
            >
              <ImageMinus className=" text-slate-400 group-hover:text-white" />
              <span className=" text-[12px] text-slate-400 group-hover:text-white flex-1 truncate ">
                {getLabel()}
              </span>

              <span>{fileProgress}</span>
            </label>

            <input
              accept="image/*"
              onChange={handleFileChange}
              id="ImageInput"
              type="file"
              className=" hidden text-gray-400 outline-none pl-4 rounded-md w-[200px] h-[30px] text-[12px]"
            />

            <button
              name="submit"
              onClick={() => {}}
              className="w-[60px] hover:bg-AppSecondary   h-[35px] bg-AppPrimary cursor-pointer rounded-md flex  text-sm justify-center items-center text-white"
            >
              {" "}
              Save 
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default FormA;
