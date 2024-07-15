"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import FormLabelWrapper from "@/app/FrameWork/Components/WebContainers/FormLabelWrapper"
import { ChangeEvent } from "react"

const formSchema = z.object({
    eventName: z.string().min(1, 'Event Name is required'),
    description: z.string().min(1,"Description is required"),
    lineUp: z.string(),
    date: z.string().min(1,"Date is required"),
    venue: z.string().min(1,"Venue is required"),
    time: z.string().min(1,"time is required"),
    eventType : z.string().min(1,"Type is required"),
    poster:  z.instanceof(FileList).refine((files) => files.length > 0, {
      message: 'File is required',
    })
})

export function ShadForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventName: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form} > 
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="eventName" 
          render={({ field }) => (
            <FormItem >
            <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event name </FormLabel>
                <FormMessage  className=" FORMERROR"  />

                </FormLabelWrapper>
              <FormControl>
                <Input  className=" FORMTEXT focus-visible:ring-0 focus-visible:ring-offset-0"  placeholder="shadcn" {...field} />
              </FormControl>
             
         
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="description" 
          render={({ field }) => (
            <FormItem >

                <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event name </FormLabel>
                <FormMessage  className=" FORMERROR"  />

                </FormLabelWrapper>
           
              <FormControl>
              
                <Textarea 
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none FORMTEXT focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
             
             
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="poster" 
          render={({ field:{ value, onChange, ...fieldProps } }) => (
            <FormItem >
            <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event name </FormLabel>
                <FormMessage  className=" FORMERROR"  />

                </FormLabelWrapper>
              <FormControl>
                <input
                 {...fieldProps}
                 onChange={(e: ChangeEvent<HTMLInputElement>) =>{

                    onChange(e.target.files)
                  }}
                 
                 
                  accept="image/*"
                type="file"  className=" FORMTEXT focus-visible:ring-0 focus-visible:ring-offset-0"  
                placeholder="shadcn" />
              </FormControl>
             
         
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
