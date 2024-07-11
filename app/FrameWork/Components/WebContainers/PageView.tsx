import { cn } from '@/lib/utils'
import React from 'react'

function PageView({children,className}:ChildrenClass) {
  return (
    <div className= {cn("  w-screen h-screen px-[24px] sm:px-[32px] lg:px-[120px] CENTER", className)}>
      
      {children}
    </div>
  )
}

export default PageView
