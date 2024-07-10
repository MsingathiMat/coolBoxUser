import { cn } from '@/lib/utils'
import React from 'react'

function PageSection({children,className,center}:PageSection) {
  return (
    <div className= {cn(" w-full h-full ", className, center?" CENTER":"")}>
      
      {children}
    </div>
  )
}

export default PageSection
