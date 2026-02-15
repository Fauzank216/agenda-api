import { ClassController } from './class.controller.js'
import express from 'express'
export const classRouter = express.Router()

classRouter.post('/', ClassController.create)
classRouter.patch('/:classId', ClassController.update)
classRouter.delete('/:classId', ClassController.delete)
classRouter.get('/', ClassController.findAll)