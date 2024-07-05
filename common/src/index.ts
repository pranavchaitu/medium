import z from "zod"

export const signupSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

export const signinSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6),
})

export const createBlogSchema =  z.object({
    title : z.string(),
    content : z.string()
})

export const updateBlogSchema = z.object({
    id : z.string(),
    title : z.string(),
    content : z.string()
})

export type SignupSchema = z.infer<typeof signupSchema> 
export type SigninSchema = z.infer<typeof signinSchema> 
export type CreateBlogSchema = z.infer<typeof createBlogSchema>
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>