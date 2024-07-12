import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import React from 'react'

function AppMenuBar() {
  return (
    <div>
 <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
      
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
     
      </MenubarMenu>
   
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
       
      </MenubarMenu>
    </Menubar>

    </div>
  )
}

export default AppMenuBar
