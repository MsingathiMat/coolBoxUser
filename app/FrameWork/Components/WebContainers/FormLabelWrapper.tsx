import React from 'react'

function FormLabelWrapper({children, className}:ChildrenClass) {
  return (
    <div className=" CENTER !justify-start gap-3  h-[20px] ">
  {children}
    </div>
  )
}

export default FormLabelWrapper
