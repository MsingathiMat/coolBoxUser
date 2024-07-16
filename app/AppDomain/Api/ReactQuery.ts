"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { UseFormReset } from "react-hook-form";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import { QueryFuncType, ResetType, userRoles, UserType } from "../Types/Types";
import { FunctionRegistry, QueryFunctions } from "../AppDeclarations/Constants";

const Authorizer = (UserRole: userRoles, FunctionName: QueryFuncType): boolean => {
  return FunctionRegistry[UserRole].includes(FunctionName);
};

 const AddUser = <T, D>(UserRole: userRoles) => {
  const QueryClient = useQueryClient();
  const { CRUD } = useInnter();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async ({
      endPoint,
      formData,
      reset,
    }: {
      endPoint: string;
      formData: D;
      reset: ResetType<T>;
    }) => {
      if (!Authorizer(UserRole, QueryFunctions.AddUser)) {
        alert(
          `API CESS DENIED!! User Role  "${UserRole}" cannot access the method  ${QueryFunctions.AddUser}`
        );
        return;
      } else {
        return CRUD.create(endPoint, formData);
      }
    },

    onSettled: async () => {
      // await QueryClient.invalidateQueries({queryKey:["GetAllUsers"]})
      // await QueryClient.invalidateQueries({queryKey:["GetNumberOfRows"]})
    },
    onSuccess: async (response, variables, __) => {
      const TypedResponse = response as QueryResponse;

      if (TypedResponse.success) {
        variables.reset();
        toast({
          title: "SUCCESSFUL",
          description: "User added Successfully ",
        });
      } else {
        throw new Error(TypedResponse.message);
      }
    },
    onError: (error) => {
      toast({
        title: "ERROR",
        description: error.message,
      });
    },
  });

  return mutation; // Return the mutation object for use by the caller
};





const GetUserByEmail =(UserRole: userRoles,email:string)=>{

  const { CRUD} = useInnter()

  
return useQuery({

  queryKey:['GetUserByEmail',email],
  queryFn: ()=>{ 
    
    if (!Authorizer(UserRole,QueryFunctions.GetUserByEmail)) {
      alert(
        `API CESS DENIED!! User Role  "${UserRole}" cannot access the method  ${QueryFunctions.GetUserByEmail}`
      );
      return;
    } else {
      return CRUD.read<UserType>("https://api.codeddesign.org.za/users",{email})
    }

  
  },
  enabled:false
}

)

}



export {GetUserByEmail, AddUser}