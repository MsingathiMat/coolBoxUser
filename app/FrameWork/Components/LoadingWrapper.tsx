
import React from 'react'
import Loader from './Loader'

function LoadingWrapper({children, isLoading,...props}:{children:React.ReactNode, isLoading:boolean}) {
  return (
    <>
      
      {
      
      isLoading?<Loader  IsLoading={isLoading}/>:children
      
      }
    </>
  )
}

export default LoadingWrapper
