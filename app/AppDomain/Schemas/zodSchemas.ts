import z from 'zod'

const userSchema = z.object({
    userName: z.string().min(1, 'User Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string(),
    handle: z.string(),
    mobile: z.string(),
    role: z.string()
  });

  const eventSchema = z.object({
    eventName: z.string().min(1, "Required"),
    description: z.string().min(1, "Required"),
  
    date: z.date({ required_error: "Required" }),
    venue: z.string().min(1, "Required"),
    time: z.string().min(1, "Required"),
    userId: z.number(),
    eventType: z.string().min(1, "Required"),
    poster: z.instanceof(FileList).refine((files) => files.length > 0, {
      message: "Required",
    }),
  });



  export {userSchema,eventSchema}