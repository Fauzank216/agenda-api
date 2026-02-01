import express from 'express'
import { MajorController } from './major.controller.js'
export const majorRouter = express.Router()

majorRouter.post('/', MajorController.create)
majorRouter.patch('/:majorId', MajorController.update)
majorRouter.delete('/:majorId', MajorController.delete)
majorRouter.get('/', MajorController.findAll)
majorRouter.get('/name', MajorController.findByName)
majorRouter.get('/majorId', MajorController.findById)