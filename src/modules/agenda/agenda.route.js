import express, { application } from 'express'
import { AgendaController } from './agenda.controller.js'
import { agendaValidator } from './agenda.validator.js'
import { authJwt } from '../../middlewares/auth.middleware.js'
import { authorizationMiddleware } from '../../middlewares/authorisation.middleware.js'
export const agendaRouter = express.Router()

agendaRouter.use(authJwt)

agendaRouter.post('/', authorizationMiddleware('teacher'), agendaValidator, AgendaController.create)
agendaRouter.get('/', AgendaController.findAll)
agendaRouter.patch('/:id_agenda', AgendaController.update)
agendaRouter.delete('/:id_agenda', authorizationMiddleware('admin'), AgendaController.delete)