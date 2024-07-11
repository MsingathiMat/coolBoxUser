"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast"
import { UseFormReset } from "react-hook-form";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import { QueryFuncType, userRoles } from "../Types/Types";
import { FunctionRegistry } from "../AppDeclarations/Constants";


const Authorizer =(Role:userRoles, FunctionName:QueryFuncType):boolean=>{

return    FunctionRegistry[Role].includes(FunctionName)
}  

export const GetAllUsers =(UserRole:userRoles)=>{

const FuncName = GetAllUsers.name
    if (Authorizer("SuperUser","getAllHotlist")){
 return "ALLOWED EXIST "
       
    }else{

return " NOT OLLWED NOT EXISTAllowed"
    }
//     const { CRUD} = useInnter()

    
   
// return useQuery({

//     queryKey:['GetAllUsers'],
//     queryFn: ()=>{ return CRUD.read<string[]>("https://api.codeddesign.org.za/users",{})}
// })

}