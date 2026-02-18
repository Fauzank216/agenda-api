import express from 'express'
import { StudentController } from "./student.controller.js";
import {studentValidator} from './student.validator.js'
export const studentRouter = express.Router()

studentRouter.post('/', studentValidator, StudentController)

studentRouter.get('/', StudentController)

studentRouter.patch('/:idStudent', studentValidator, StudentController)

studentRouter.delete('/:idStudent', StudentController)

studentRouter.get('/:idStudent', StudentController)