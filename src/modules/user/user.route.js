import express from 'express'
import { UserController } from './user.controller.js'
import { createUserValidator, updatePforileValidator } from './user.validator.js'
export const userRouter = express.Router()

userRouter.post("/", createUserValidator, UserController.create)

userRouter.get("/", UserController.findAll)

userRouter.patch("/:userId", updatePforileValidator, UserController.update)

userRouter.delete("/:userId", UserController.delete)

userRouter.patch("/status/:userId", UserController.updateStatus)

userRouter.patch("/password/:userId", UserController.updatePassword)

userRouter.patch("/avatar/:userId", UserController.updateAvatar)

userRouter.get("/search", UserController.findByEmail)