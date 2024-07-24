import { Button } from '@/components/ui/button'
import React from 'react'
import LoadingWrapper from '../LoadingWrapper'
import Link from 'next/link'


function SubmitButton({children,className, isLoading}:ChildrenClass &{isLoading:boolean}) {
  return (
    <div>

        <LoadingWrapper isLoading={isLoading}>
        <Button  className={className}>
        {children}
          </Button>

        </LoadingWrapper>
     

    </div>
  )
}

export default SubmitButton
