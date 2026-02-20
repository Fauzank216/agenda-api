import express from 'express'
import { AgendaController } from './agenda.controller.js'
import { agendaValidator } from './agenda.validator.js'
export const agendaRouter = express.Router()

agendaRouter.post('/', agendaValidator, AgendaController.create)
agendaRouter.get('/', AgendaController.findAll)
agendaRouter.patch('/:idAgenda', AgendaController.update)
agendaRouter.delete('/:idAgenda', AgendaController.delete)