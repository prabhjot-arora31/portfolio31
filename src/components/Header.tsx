"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Card } from "./ui/card"


export function Header() {
  return (
    <>
    
        <h2 className="font-bold text-center mt-5 text-[#0895A1] uppercase">Portfolio</h2>
     
    <div  className="p-5 flex justify-center flex-wrap items-center" >
   
    <div className=" flex">
        <Link href='' style={{backgroundColor:"#0895A1" , color:'black' , paddingLeft:'0.7rem',paddingRight:'0.7rem',paddingTop:"0.2rem", borderRadius:'5px'  ,paddingBottom:'0.2rem'}} >Home</Link>
        <Link href='#skill' className="ml-5"  style={{backgroundColor:"#0895A1" , color:'black' , paddingLeft:'0.7rem',paddingRight:'0.7rem',paddingTop:"0.2rem", borderRadius:'5px'  ,paddingBottom:'0.2rem'}}>Skills</Link>
        <Link href='#project' className="ml-5"  style={{backgroundColor:"#0895A1" , color:'black' , paddingLeft:'0.7rem',paddingRight:'0.7rem',paddingTop:"0.2rem", borderRadius:'5px'  ,paddingBottom:'0.2rem'}}>Projects</Link>
        <Link href= '#contact'  className="ml-5"  style={{backgroundColor:"#0895A1" , color:'black' , paddingLeft:'0.7rem',paddingRight:'0.7rem',paddingTop:"0.2rem", borderRadius:'5px'  ,paddingBottom:'0.2rem'}}>Contact</Link>
    </div>
    </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
