import { QueryFunctions, UserRole } from "../AppDeclarations/Constants"
import { userSchema } from "../Schemas/zodSchemas"


//BB table types

type UserType = Zod.infer<typeof userSchema>

type ApiQueryResponse={
    success:boolean,
    data:string
  }

  type ApiMutateResponse={
    success:boolean,
    message:string
  }

  type ResetFuncType =UseFormReset<{
    userName: string;
    userType: string;
    email: string;
    mobile: string;
    handle: string;
    password: string;
    imageUrl: string;
}>

type eventsType ={
  eventName: string;
  description: string;
  date: string;
  venue: string;
  time: string;
  userId: number;
  eventType: string;
  posterUrl: string;
  
}

type ResetType<T> = UseFormReset<T>

type QueryFuncType = keyof typeof QueryFunctions

type userRoles = keyof typeof UserRole