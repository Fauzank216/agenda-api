import { ClassController } from './class.controller.js'
import express from 'express'
export const classRouter = express.Router()

classRouter.post('/', ClassController.create)

classRouter.patch('/:id_class', ClassController.update)

classRouter.delete('/:id_class', ClassController.delete)

classRouter.get('/', ClassController.findAll)

classRouter.get('/', ClassController.findById)

classRouter.get('/:id_class/stats', ClassController.findStatsById) 

classRouter.get('/stats', ClassController.findAllStats) 