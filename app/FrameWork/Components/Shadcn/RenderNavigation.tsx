import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
function RenderNavigation() {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger >Home</NavigationMenuTrigger>
    
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger >Events</NavigationMenuTrigger>
    
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  )
}

export default RenderNavigation
