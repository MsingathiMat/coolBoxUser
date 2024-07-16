import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AppCard } from "./AppCard"

export function AppSlider() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className=" p-4">
            <AppCard/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" bg-white ml-[20px]"/>
      <CarouselNext  className=" bg-white mr-[20px]" />
    </Carousel>
  )
}
