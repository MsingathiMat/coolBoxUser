"use client";
import { format } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import FormLabelWrapper from "@/app/FrameWork/Components/WebContainers/FormLabelWrapper";
import { ChangeEvent, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { useInnter } from "@/app/FrameWork/Api/useInnter";
import { Progress } from "@/components/ui/progress";

const formSchema = z.object({
  eventName: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),

  date:z.date(),
  venue: z.string().min(1, "Venue is required"),
  time: z.string().min(1, "Time is required"),
  userId: z.number(),
  eventType: z.string().min(1, "Event Type is required"),
  poster: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: "File is required",
  }),
});

export function ShadForm() {

  const {upload} = useInnter()

  const [progress, setProgress] = useState(0)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  // https://api.codeddesign.org.za/upload

  type FormType = z.infer<typeof formSchema>
  function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();
    const nextId = 2;
     

  
  
    try {
      const imageName = `${nextId.toString()}.jpg`;
      formData.append("poster", data.poster[0], imageName);
     

      
      // Append other form data fields to formData
      (Object.keys(data) as (keyof FormType)[]).forEach(key => {
        if (key !== 'poster' && key !== 'date') { // Skip the poster key since it's already appended
          formData.append(key, data[key].toString());
        }
      });

      formData.append("date", format(data.date, "PPP").toString());
  
      upload("https://api.codeddesign.org.za/uploaddata", formData, setProgress).then((resp) => {
        console.log(resp);
      }).catch((rs) => {
        console.log(rs);
      });
   
    } catch (error) {
      console.log(error);
    }
  }
  

  form.setValue("userId",2)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className=" CENTER h-full gap-4 relative items-start   ">


        <div id="LEFT" className=" p-4  bg-slate-200 w-[400px] CENTER flex-col items-start gap-4">
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event Name </FormLabel>
                <FormMessage className=" FORMERROR" />
              </FormLabelWrapper>
              <FormControl>
                <Input
                  className=" FORMTEXT focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="venue"
          render={({ field }) => (
            <FormItem>
              <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Venue </FormLabel>
                <FormMessage className=" FORMERROR" />
              </FormLabelWrapper>
              <FormControl>
                <Input
                  className=" FORMTEXT focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Venue"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event Description </FormLabel>
                <FormMessage className=" FORMERROR" />
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



        </div>

      <div id="RIGHT" className=" CENTER justify-start   flex-col items-start gap-4">

      <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
              <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event Type </FormLabel>
                <FormMessage className=" FORMERROR" />
              </FormLabelWrapper>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=" w-[200px] ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            
           
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
             <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event Date </FormLabel>
                <FormMessage className=" FORMERROR" />
              </FormLabelWrapper>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[200px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
           
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="poster"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Event name </FormLabel>
                <FormMessage className=" FORMERROR" />
              </FormLabelWrapper>
              <FormControl>
                <input
                  {...fieldProps}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.files);
                  }}
                  accept="image/*"
                  type="file"
                  className=" FORMTEXT hover:cursor-pointer"
                  placeholder="shadcn"
                />
              </FormControl>
            </FormItem>
          )}
        />

<Progress bgColor=" bg-AppPrimary"  className=" h-[5px] bg-slate-200" value={progress} />

        <FormField
          control={form.control}
          name="time"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabelWrapper>
                <FormLabel className=" FORMTEXT ">Time </FormLabel>
                <FormMessage className=" FORMERROR " />
              </FormLabelWrapper>
              <FormControl>
                <Input {...fieldProps}
                  type="time"
                  onChange={onChange}
                  className=" FORMTEXT w-30 hover:cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Venue"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
       
       </div>
      <div className=" w-full CENTER h-[90px] bg-slate-200">

      <Button className=" " type="submit">Submit</Button>
      </div>
      </form>
    </Form>
  );
}
