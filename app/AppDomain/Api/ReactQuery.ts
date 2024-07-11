"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast"
import { UseFormReset } from "react-hook-form";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import { QueryFuncType, ResetType, userRoles } from "../Types/Types";
import { FunctionRegistry } from "../AppDeclarations/Constants";

const Authorizer = (Role: userRoles, FunctionName: QueryFuncType): boolean => {
  return FunctionRegistry[Role].includes(FunctionName);
};

export const AddUser = <T, D>() => {
  const QueryClient =useQueryClient()
  const { CRUD } = useInnter();
  const { toast } = useToast()

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
   return CRUD.create(endPoint, formData);
    },

    onSettled: async () => {
      await QueryClient.invalidateQueries({queryKey:["GetAllUsers"]})
      await QueryClient.invalidateQueries({queryKey:["GetNumberOfRows"]})
    },
    onSuccess: async (response  , variables, __) => {

      const TypedResponse = response as QueryResponse;

       if(TypedResponse.success){

        variables.reset();
        toast({
            title: "SUCCESSFUL",
            description: "User added Successfully ",
          })

       }else{

        throw new Error(TypedResponse.message);
       }
    
    
    },
    onError: (error) => {
      toast({
          title: "ERROR",
          description: error.message,
        })

  
    },
  });

  return mutation; // Return the mutation object for use by the caller
};
