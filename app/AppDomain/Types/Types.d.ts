import { QueryFunctions, UserRole } from "../AppDeclarations/Constants"

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

type ResetType<T> = UseFormReset<T>

type QueryFuncType = keyof typeof QueryFunctions

type userRoles = keyof typeof UserRole