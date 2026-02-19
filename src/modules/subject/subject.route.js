import { SubjectController } from "./subject.controller.js";
import { subjectValidator } from "./subject.validator.js";
import express from 'express'

const subjectRouter = express.Router()

subjectRouter.post('/', subjectValidator, SubjectController.create),

subjectRouter.get('/', SubjectController.findAll)

subjectRouter.patch('/:idSubject', subjectValidator, SubjectController.update)

subjectRouter.delete('/:idSubject', SubjectController.delete)