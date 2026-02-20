import express from 'express'
import { AgendaDetailController } from './agenda-detail.controller.js'
import { validateAgendaDetail } from './agenda-detail.validator.js'
export const agendaDetailRouter = express.Router()

agendaDetailRouter.post('/', validateAgendaDetail, AgendaDetailController.create)

agendaDetailRouter.get('/', AgendaDetailController.findAll)

agendaDetailRouter.patch('/:idAgendaDetail', AgendaDetailController.update)

agendaDetailRouter.delete('/:idAgendaDetail', AgendaDetailController.delete)