"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function AppProgress({progress}:{progress:number}) {
 



  return <Progress value={progress} className="w-[60%]" />
}
