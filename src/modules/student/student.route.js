import express from 'express'
import { StudentController } from "./student.controller.js";
import {studentValidator} from './student.validator.js'
export const studentRouter = express.Router()

studentRouter.post('/', studentValidator, StudentController.create)

studentRouter.get('/', StudentController.findAll)

studentRouter.patch('/:id_student', studentValidator, StudentController.update)

studentRouter.delete('/:id_student', StudentController.delete)

studentRouter.get('/:id_student', StudentController.findById)

studentRouter.get('/:id_student/summary', StudentController.findStats)