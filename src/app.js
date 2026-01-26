import express from "express";
import { authRouter } from "./modules/auth/auth.route.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js";

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running`)
})

app.use('/api/auth', authRouter)

app.use(errorHandlerMiddleware)