import express from 'express'
import { MajorController } from './major.controller.js'
import { majorValidator } from './major.validator.js'
export const majorRouter = express.Router()

majorRouter.post('/', majorValidator, MajorController.create)

majorRouter.put('/:id_major', majorValidator, MajorController.update)

majorRouter.delete('/:id_major', MajorController.delete)

majorRouter.get('/', MajorController.findAll)

majorRouter.get('/:id_major', MajorController.findById)