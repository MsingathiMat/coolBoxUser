"use client"


import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useQueryClient } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation";
import { useAtom } from 'jotai'

import { eventType } from "@/app/AppDomain/Types/Types";
import { useInnter } from "@/app/FrameWork/Api/useInnter";

const AddHotlist =({UserName, UserId}:{UserName:string, UserId:number})=>{

const Router = useRouter()
 

const CallBack =()=>{


  Router.push(`/addhotlist/?UserName=${UserName}&UserId=${UserId}`)
}

  return  <DropdownMenuItem onClick={()=>{CallBack()}} >Create Hotlist</DropdownMenuItem>
}
const RemoveRow = (User:eventType)=>{

  const {CRUD} = useInnter()
  // const deleteRecord = DeleteRecord()
  
  const router = useRouter()
 const DeleteSelectedRow =({userId}:{userId:number})=>{
  
  

  // deleteRecord.mutate({endPoint:"https://api.codeddesign.org.za/delete",Params:{userId:userId,tableName:"Users"}})
    
    
    CRUD.remove<{userId:number,tableName:string},ApiMutateResponse>("https://api.codeddesign.org.za/delete",{userId:userId,tableName:"Users"}).then(data=>{
    
    if(data?.success){
    
    
    
     
     
    }
    }).catch((error:any)=>{
    
      console.log(error)
    })
     

    }


 
return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild className="focus-visible:ring-0 focus-visible:ring-offset-0 ">
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem
        onClick={() =>{router.push(`/profile/?imageUrl=${""}&userName=${""}&status=${""}&userType=${""}&handle=${""} `)}}
      >
       View Profile   
      </DropdownMenuItem>
      <DropdownMenuSeparator  onClick={() => navigator.clipboard.writeText("")} />
      <DropdownMenuItem  onClick={()=>{DeleteSelectedRow({userId:User.userId})}}  >Delete</DropdownMenuItem>
     
      <AddHotlist UserId={User.userId } UserName={"" }/>
    </DropdownMenuContent>
  </DropdownMenu>
)
          
    
         
  
}



const SelectComp = (UserStatus:string,userId:number)=>{
  

  const [Val, SetVal]= useState<string | null>(null)


// const UpdateRecord = UpdateRow();

const RowUpdate=(RowId:number,Column:string, Value:string)=>{

  // const rowNumberInt = Number(RowId)
  // UpdateRecord.mutate({
  //   endPoint:"https://api.codeddesign.org.za/user",
  //   formData:{userId:rowNumberInt, [Column]:Value}
  // })
}

  useEffect(()=>{

if(Val){
  RowUpdate(userId,"status",Val)
  
}
  },[Val])
  return(
    <Select  onValueChange={SetVal} >
      <SelectTrigger  className=" text-[10px] w-[120px] focus:ring-0 focus:ring-offset-0 h-[30px] mt-1 mb-1">
        <SelectValue placeholder={UserStatus}  className=" "/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="text-[10px]" value="ACTIVE">ACTIVE</SelectItem>
        <SelectItem className="text-[10px]" value="SUSPENDED">SUSPENDED</SelectItem>
        <SelectItem className="text-[10px]" value="DEACTIVATED">DEACTIVATED</SelectItem>
      </SelectContent>
    </Select>
          
    
         )
  
}

export const ColumFunc = ({editUser}:{ editUser:(id:number)=>void}):ColumnDef<eventType>[]=>{
const defaultImage = "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="

  return [
    {
      id: "imageUrl",
      cell: ({ row }) => {
        const User = row.original
   
     return(
      <Avatar className=" m-1 ml-3 w-6 h-6">
  <AvatarImage src={""} />
  <AvatarFallback > <AvatarImage src={defaultImage} /></AvatarFallback>
</Avatar>

     )
      },
    },
    {
      accessorKey: "userId",
      header: "User ID",
    },
    {
      accessorKey: "userName",
      header: "User Name",
    },
    {
      accessorKey: "userType",
      header: "User Type",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "mobile",
      header: "Mobile Number",
    },
    {
      accessorKey: "handle",
      header: "Handle",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const User = row.original
   return SelectComp("",4)
      

     
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const User = row.original
   
        return (RemoveRow(User))
        
      },
    },
  ]
}


