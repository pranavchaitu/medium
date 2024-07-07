import { Hono } from "hono";
import { prismaCreate } from "../middlewares/prismaCreate";
import { PrismaClient } from "@prisma/client/edge";
import { signinSchema, signupSchema } from "@pranav.chaitu/medium-common";
import { sign } from "hono/jwt";

const app = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string 
    },
    Variables : {
        prisma : PrismaClient
    }
}>()

app.use("/*",prismaCreate)

app.post('/signup',async(c) => {
    const prisma = c.get("prisma")
    const body : {
        email : string,
        password : string
        name? : string
    } = await c.req.json()
    const { success } = signupSchema.safeParse(body)
    if(!success) {
        c.status(411)
        return c.json({
            error : "inputs are not good"
        })
    }
    try {
        const user = await prisma.user.create({
            data : {
                email : body.email,
                password : body.password,
                name : body.name || body.email.split('@')[0]
            }
        })
        const token = await sign({
            id : user.id
        },c.env.JWT_SECRET)
    
        return c.json({
            token
        })   
    } catch (error) {
        c.status(411)
        return c.json({
            message : "user aldready exists"
        })
    }
})

app.post('/signin',async (c) => {
    const prisma = c.get("prisma")
    const body : {
        email : string,
        password : string
    } = await c.req.json()
    const { success } = signinSchema.safeParse(body)
    if(!success) {
        c.status(411)
        return c.json({
            error : "inputs not good"
        })
    }
    const user = await prisma.user.findFirst({
        where : {
            email : body.email,
            password : body.password
        }
    })
    if(!user) {
        c.status(404)
        return c.json({
            error : "user not found"
        })
    }
    const token = await sign({
        id : user.id
    },c.env.JWT_SECRET) 
    return c.json({
        token
    })
})

export default app;