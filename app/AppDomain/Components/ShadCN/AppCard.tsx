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
import { Heart, ThumbsUp } from "lucide-react"


export function AppCard({EventName,description, PosterUrl, date, time }:{EventName:string,description:string, PosterUrl:string, date:string, time:string }) {
 

 
  return (
  <div className=" relative">
      <Card className="w-[250px] h-auto ">
      <CardHeader>
        <CardTitle className=" text-md">{EventName}</CardTitle>
        <CardDescription  className=" text-[12px]">{description}</CardDescription>
      </CardHeader>
      <CardContent>
       <Image width={300} height={100} className="w-full h-[150px] rounded-sm  " alt=""  src={PosterUrl}/>
      </CardContent>

    <div className=" FORMTEXT CENTER !justify-between w-full px-8 mb-3"> 

    <p className=" font-bold">{date}</p>  <p className=" text-ApppTertiary">{time}</p>
    </div>
      <CardFooter className="flex justify-between">
     <div className=" CENTER gap-3 text-sm ">  <Heart size={18} className=" hover:text-AppPrimary hover:cursor-pointer"/> <ThumbsUp size={18} className=" hover:text-AppPrimary hover:cursor-pointer"/></div>
        <Button className=" bg-AppPrimary text-white">DJ Lineup</Button>
      </CardFooter>
    </Card>
  </div>
  )
}
