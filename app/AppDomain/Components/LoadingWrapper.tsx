
import React from 'react'
import Loader from './Loader'

function LoadingWrapper({children, isLoading,...props}:{children:React.ReactNode, isLoading:boolean}) {
  return (
    <div>
      
      {
      
      isLoading?<Loader  IsLoading={isLoading}/>:children
      
      }
    </div>
  )
}

export default LoadingWrapper
