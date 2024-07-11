"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


import { useToast } from "@/components/ui/use-toast"
import { UseFormReset } from "react-hook-form";
import { useInnter } from "@/app/FrameWork/Api/useInnter";



export const GetAllUsers =()=>{

    const { CRUD} = useInnter()

    
return useQuery({

    queryKey:['GetAllUsers'],
    queryFn: ()=>{ return CRUD.read<string[]>("https://api.codeddesign.org.za/users",{})}
})

}


export const GetAllHotlist =<T,>()=>{

    const { CRUD} = useInnter()

    
return useQuery({

    queryKey:['GetAllHotlist'],
    queryFn: ()=>{ return CRUD.read<T[]>("https://api.codeddesign.org.za/hotlists",{})}
})

}


export const GetAllSongs =<T,>()=>{

    const { CRUD} = useInnter()

    
return useQuery({

    queryKey:['GetAllSongs'],
    queryFn: ()=>{ return CRUD.read<T[]>("https://api.codeddesign.org.za/songs",{})}
})

}



export const GetNextRecordId =(tableColumn:string,table:string)=>{

    const { CRUD} = useInnter()

    
return useQuery({
   
    queryKey:['GetNextUserId'],
    queryFn: ()=>{ return CRUD.read<number>("https://api.codeddesign.org.za/lastId",{tableColumn,table})}
})

}



export const GetHotlistNextRecordId =(tableColumn:string,table:string)=>{

    const { CRUD} = useInnter()

    
return useQuery({
   
    queryKey:['GetHotlistNextRecordId'],
    queryFn: ()=>{ return CRUD.read<number>("https://api.codeddesign.org.za/lastId",{tableColumn,table})}
})

}


export const GetNumberOfRows =()=>{

    const { CRUD} = useInnter()

    
return useQuery({
   
    queryKey:['GetNumberOfRows'],
    queryFn: ()=>{ return CRUD.read<number>("https://api.codeddesign.org.za/numberOfRows",{tableColumn:"userId",table:"Users"})}
})

}


export const GetHotlistNumberOfRows =()=>{

    const { CRUD} = useInnter()

    
return useQuery({      
   
    queryKey:['GetHotlistNumberOfRows'],
    queryFn: ()=>{ return CRUD.read<number>("https://api.codeddesign.org.za/numberOfRows",{tableColumn:"hotlistId",table:"Hotlist"})}
})

}

export const AddUser = <T,D>() => {
    const QueryClient =useQueryClient()
    const { CRUD } = useInnter();
    const { toast } = useToast()

  
    const mutation = useMutation(
    {
        
        mutationFn: async({endPoint,formData,reset}:{ endPoint: string,formData:D, reset:ResetType<T>})=>{

            return CRUD.create(endPoint, formData);
        },

        onSettled:async()=>{
            await QueryClient.invalidateQueries({queryKey:["GetAllUsers"]})
            await QueryClient.invalidateQueries({queryKey:["GetNumberOfRows"]})
        }
,
        onSuccess: async(_,variables,__)=>{

          
            variables.reset()
            toast({
                title: "SUCCESSFUL",
                description: "User added Successfully ",
              })
           
             
        },
        onError:()=>{

            toast({
                title: "ERROR",
                description: "User not added",
              })
        }
    }
     
      
    );
  
    return mutation; // Return the mutation object for use by the caller
  };




  
export const AddHotList = <T,D>() => {
    const QueryClient =useQueryClient()
    const { CRUD } = useInnter();
    const { toast } = useToast()

  
    const mutation = useMutation(
    {
        
        mutationFn: async({endPoint,formData,reset}:{ endPoint: string,formData:D, reset:ResetType<T>})=>{

            return CRUD.create(endPoint, formData);
        },

        onSettled:async()=>{
            await QueryClient.invalidateQueries({queryKey:["GetHotlistNumberOfRows"]})
            await QueryClient.invalidateQueries({queryKey:["GetAllHotlist"]})
        }
,
        onSuccess: async(data,variables,__)=>{

       const ApiData = data as ApiMutateResponse
            
          if(ApiData.success){
            variables.reset()
            toast({
                title: "SUCCESSFUL",
                description: "Hotlist added Successfully ",
              })
          }else{
        
            toast({
                title: "Failed",
                description: "FAILED to ad Hotlist ",
                variant:"destructive"
              })

          }
           
             
        },
        onError:()=>{

            toast({
                title: "ERROR",
                description: "Hotlist not added",
              })
        }
    }
     
      
    );
  
    return mutation; // Return the mutation object for use by the caller
  };





  export const AddSongs = <T,D>() => {
    const QueryClient =useQueryClient()
    const { CRUD } = useInnter();
    const { toast } = useToast()

  
    const mutation = useMutation(
    {
        
        mutationFn: async({endPoint,formData,reset}:{ endPoint: string,formData:D, reset:ResetType<T>})=>{

            return CRUD.create(endPoint, formData);
        },

        onSettled:async()=>{
            await QueryClient.invalidateQueries({queryKey:["GetHotlistNumberOfRows"]})
            await QueryClient.invalidateQueries({queryKey:["GetAllHotlist"]})
        }
,
        onSuccess: async(data,variables,__)=>{

       const ApiData = data as ApiMutateResponse
            
          if(ApiData.success){
            variables.reset()
            toast({
                title: "SUCCESSFUL",
                description: "Hotlist added Successfully ",
              })
          }else{
        
            toast({
                title: "Failed",
                description: "FAILED to ad Hotlist ",
                variant:"destructive"
              })

          }
           
             
        },
        onError:()=>{

            toast({
                title: "ERROR",
                description: "Hotlist not added",
              })
        }
    }
     
      
    );
  
    return mutation; // Return the mutation object for use by the caller
  };

  export const DeleteRecord = () => {
    const QueryClient =useQueryClient()
    const { CRUD } = useInnter();
    const { toast } = useToast()

  
    const mutation = useMutation(
    {
        
        mutationFn: async({endPoint,Params}:{ endPoint: string,Params:any })=>{

            return CRUD.remove(endPoint,Params)
        },

        onSettled:async()=>{
            await QueryClient.invalidateQueries({queryKey:["GetAllUsers"]})
            await QueryClient.invalidateQueries({queryKey:["GetNumberOfRows"]})
        }
,
        onSuccess: async(_,variables,__)=>{

          
        console.log()
            toast({
                title: "SUCCESSFUL",
                description: "User DELETED Successfully ",
              })
           
             
        },
        onError:()=>{

            toast({
                title: "ERROR",
                description: "User not UPDATED",
              })
        }
    }
     
      
    );
  
    return mutation; // Return the mutation object for use by the caller
  };
  export const UpdateRow = () => {
    const QueryClient =useQueryClient()
    const { CRUD } = useInnter();
    const { toast } = useToast()

  
    const mutation = useMutation(
    {
        
        mutationFn: async({endPoint,formData}:{ endPoint: string,formData:string })=>{

            return CRUD.update(endPoint, formData);
        },

        onSettled:async()=>{
            await QueryClient.invalidateQueries({queryKey:["GetAllUsers"]})
          
        }
,
        onSuccess: async()=>{

            await QueryClient.invalidateQueries({queryKey:["GetAllUsers"]})
          
         
            toast({
                title: "SUCCESSFUL",
                description: "User UPDATED Successfully ",
              })

             
        },
        onError:()=>{

            toast({
                title: "ERROR",
                description: "User not added",
              })
        }
    }
     
      
    );
  
    return mutation; // Return the mutation object for use by the caller
  };
  export const MutateUpload = () => {
    const { CRUD } = useInnter();
    const SaveUer = AddUser()


    const mutation = useMutation (
        {
            mutationFn: async  ({ endPoint, formData, setFileProgress, UserData,reset }: { endPoint: string, formData: FormData, setFileProgress: React.Dispatch<React.SetStateAction<number>>, UserData: string, reset:UseFormReset<{
                userName: string;
                userType: string;
                email: string;
                mobile: string;
                handle: string;
                password: string;
                imageUrl: string;
            }> }) => {
                // Call your CRUD function and return the Axios response
                return await CRUD.upload(endPoint, formData, setFileProgress);
            },

            onSuccess(_, variables, __) {
                
               

                SaveUer.mutate({endPoint:"https://api.codeddesign.org.za/user",formData:variables.UserData, reset:variables.reset},)
            },
           
        }
    );

    return mutation;
};




  
