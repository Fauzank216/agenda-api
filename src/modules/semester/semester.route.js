import express from 'express'
import { SemesterController } from './semester.controller.js'
import { semesterValidator } from './semester.validator.js'

export const semesterRouter = express.Router()

semesterRouter.post('/', semesterValidator, SemesterController.create)

semesterRouter.patch('/:id_semester', SemesterController.update)

semesterRouter.delete('/:id_semester', SemesterController.delete)

semesterRouter.get('/:id_semester', SemesterController.findById)

semesterRouter.get('/', SemesterController.findAll)