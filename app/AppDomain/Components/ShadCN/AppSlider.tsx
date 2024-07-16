

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AppCard } from "./AppCard"
import { useInnter } from "@/app/FrameWork/Api/useInnter"
import { useEffect, useState } from "react"
import { EventType } from "react-hook-form"
import { eventsType } from "../../Types/Types"

export function AppSlider() {

  const {read} = useInnter()

  const [events, setEvents]=useState<eventsType[]>()
  
useEffect(()=>{

  read<eventsType[]>("https://api.codeddesign.org.za/events").then((data)=>{
    setEvents(data)
  }).catch((error)=>{

console.log(error)
  })
},[])

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full "
    >
      <CarouselContent>
        {events?.map((event, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className=" p-4">
            <AppCard date={event.date} time={event.time} EventName={event.eventName} PosterUrl={event.posterUrl} description={event.description}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" bg-white ml-[20px]"/>
      <CarouselNext  className=" bg-white mr-[20px]" />
    </Carousel>
  )
}
