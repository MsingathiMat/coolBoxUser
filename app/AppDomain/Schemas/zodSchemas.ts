import z from 'zod'

const userSchema = z.object({
    userName: z.string().min(1, 'User Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string(),
    handle: z.string(),
    mobile: z.string(),
    role: z.string()
  });

 



  export {userSchema}