import React from 'react'
import RenderList from './RenderList'
import { NavItems } from '@/app/AppDomain/AppDeclarations/AppDeclarations'

function NavList() {
  return (
  <>
  
  <RenderList ListItems={NavItems}/>
  </>
  )
}

export default NavList
