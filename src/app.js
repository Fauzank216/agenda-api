import 'dotenv/config'
import express from "express";
import { authRouter } from "./modules/auth/auth.route.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js";
import { userRouter } from "./modules/user/user.route.js";
import { majorRouter } from "./modules/major/major.route.js";
import { classRouter } from './modules/class/class.route.js';
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running`)
})

app.use('/api/auth', authRouter)

app.use('/api/users', userRouter)

app.use('/api/majors', majorRouter)

app.use('/api/class', classRouter)
app.use(errorHandlerMiddleware)