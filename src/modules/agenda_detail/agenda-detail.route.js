import express from 'express'
import { AgendaDetailController } from './agenda-detail.controller.js'
import { validateAgendaDetail } from './agenda-detail.validator.js'
export const agendaDetailRouter = express.Router()

agendaDetailRouter.post('/', validateAgendaDetail, AgendaDetailController.create)

agendaDetailRouter.get('/', AgendaDetailController.findAll)

agendaDetailRouter.patch('/status/:id_agenda_details', AgendaDetailController.updateStatus)

agendaDetailRouter.patch('/note/:id_agenda_details', AgendaDetailController.updateNote)

agendaDetailRouter.delete('/:id_agenda_details', AgendaDetailController.delete)

agendaDetailRouter.get('/:id_agenda_details', AgendaDetailController.findById)