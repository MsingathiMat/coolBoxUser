import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"


export function AppCard({title,description, imageUrl }:{title:string,description:string, imageUrl:string }) {
  return (
  <div className=" relative">
      <Card className="w-[250px] h-auto ">
      <CardHeader>
        <CardTitle className=" text-md">{title}</CardTitle>
        <CardDescription  className=" text-[12px]">{description}</CardDescription>
      </CardHeader>
      <CardContent>
       <Image width={300} height={100} className="w-full h-[150px] rounded-sm  " alt=""  src={imageUrl}/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className=" bg-AppPrimary text-white">Deploy</Button>
      </CardFooter>
    </Card>
  </div>
  )
}
