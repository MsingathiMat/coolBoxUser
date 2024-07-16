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


export function AppCard() {
  return (
  <div className=" relative">
      <Card className="w-[250px] h-auto ">
      <CardHeader>
        <CardTitle className=" text-md">Create project</CardTitle>
        <CardDescription  className=" text-[12px]">Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       <Image width={300} height={100} className="w-full h-[150px] rounded-sm  " alt=""  src="https://deep-house.co.za/wp-content/uploads/2022/12/3087081239_A_man_djing_at_night_under_the_stars_in_Africa__beautiful__digital_art__artstation__hyperrealistic__.png"/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className=" bg-AppPrimary text-white">Deploy</Button>
      </CardFooter>
    </Card>
  </div>
  )
}
