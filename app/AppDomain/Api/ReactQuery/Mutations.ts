import { useInnter } from "@/app/FrameWork/Api/useInnter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { eventType, QueryFuncType, ResetType, userRoles } from "../../Types/Types";
import { useToast } from "@/components/ui/use-toast";
import { FunctionRegistry, QueryFunctions } from "../../AppDeclarations/Constants";

const Authorizer = (UserRole: userRoles, FunctionName: QueryFuncType): boolean => {
  console.log(FunctionName)
  console.log(UserRole)
  return FunctionRegistry[UserRole].includes(FunctionName);
};

const AddEvent = (UserRole: userRoles) => {
    const QueryClient = useQueryClient();
    const { upload } = useInnter();
    const { toast } = useToast();
   
    const mutation = useMutation({
      mutationFn: async ({
        endPoint,
        formData,
        reset,
        progressPercentage
      }: {
        endPoint: string;
        formData: FormData;
        reset: ResetType<eventType>;
        progressPercentage: React.Dispatch<React.SetStateAction<number>>
      }) => {
        if (!Authorizer(UserRole, QueryFunctions.AddEvent)) {
          alert(
            `API CESS DENIED!! User Role  "${UserRole}" cannot access the method  ${QueryFunctions.AddEvent}`
          );
          return;
        } else {
          

         return upload(endPoint,formData,progressPercentage)
        }
      }
      // ,
  
      // onSettled: async () => {
      //   // await QueryClient.invalidateQueries({queryKey:["AddProject"]})
      //   // await QueryClient.invalidateQueries({queryKey:["GetNumberOfRows"]})

      // }
      // ,
      // onSuccess: async (response, variables, __) => {

      //   console.log(response)
      //   // const TypedResponse = response as QueryResponse;
  
      //   // if (TypedResponse.success) {
      //   //   variables.reset();
      //   //   toast({
      //   //     title: "SUCCESSFUL",
      //   //     description: "User added Successfully ",
      //   //   });
      //   // } else {
      //   //   throw new Error(TypedResponse.message);
      //   // }
      // },
      // onError: (error) => {
      //   toast({
      //     title: "ERROR",
      //     description: error.message,
      //   });
      // },
    });
  
    return mutation; // Return the mutation object for use by the caller
  };

  export {AddEvent}