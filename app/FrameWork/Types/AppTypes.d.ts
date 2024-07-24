type ChildrenNodes ={children:React.ReactNode}

type ChildrenClass = ChildrenNodes  & {className?:string}

type PageSection = ChildrenClass & {center?:boolean}

type setState<P>=React.Dispatch<React.SetStateAction<P>>

type FuncString = (()=>void) | `/${string}`
type ListItems ={

    itemLabel:string | React.ReactNode,
    callBack:FuncString,
    className?:string
  
}[]


type QueryResponse= {success: boolean, message: string}
type StringNode = string | Extract.ReactNode

type ApiResponse<P> = {success:boolean, message:string,data:P}

type ApiMutateResponse={
    success:boolean,
    message:string
  }