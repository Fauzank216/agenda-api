import express from 'express'
import { AgendaDetailController } from './agenda-detail.controller.js'
import { authJwt } from '../../middlewares/auth.middleware.js'
export const agendaDetailRouter = express.Router()

agendaDetailRouter.use(authJwt)

agendaDetailRouter.get('/', AgendaDetailController.findAll)

agendaDetailRouter.patch('/:id_agenda_details', AgendaDetailController.update)

agendaDetailRouter.delete('/:id_agenda_details', AgendaDetailController.delete)

agendaDetailRouter.get('/:id_agenda_details', AgendaDetailController.findById)