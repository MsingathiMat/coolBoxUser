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

type StringNode = string | Extract.ReactNode
