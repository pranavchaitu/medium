import { Hono } from "hono";
import userRouter from "./user"
import blogRouter from "./blog"

export const root = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
}>();

root.route('/user',userRouter)
root.route('/blog',blogRouter)