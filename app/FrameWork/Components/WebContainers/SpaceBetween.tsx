import { cn } from '@/lib/utils'
import React from 'react'

function SpaceBetween({children, className}:ChildrenClass) {
  return (
    <div className= {cn(" CENTER !justify-between   ",className)}>
      
      {children}
    </div>
  )
}

export default SpaceBetween
