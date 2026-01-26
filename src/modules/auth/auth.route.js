import express from 'express'
import { AuthController } from './auth.controller.js'
import { loginValidator } from './auth.validator.js'

export const authRouter = express.Router()

const authController = new AuthController()

authRouter.post('/login', loginValidator, authController.login)