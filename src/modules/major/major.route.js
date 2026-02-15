import express from 'express'
import { MajorController } from './major.controller.js'
import { createMajorValidator, updateMajorValidator } from './major.validator.js'
export const majorRouter = express.Router()

//menambahkan penggunaan validator
majorRouter.post('/', createMajorValidator, MajorController.create)
majorRouter.patch('/:majorId', updateMajorValidator, MajorController.update)
majorRouter.delete('/:majorId', MajorController.delete)
majorRouter.get('/name', MajorController.findByName)
majorRouter.get('/', MajorController.findAll)
majorRouter.get('/:majorId', MajorController.findById)