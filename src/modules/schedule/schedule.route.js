import { ScheduleController } from "./schedule.controller.js";
import { scheduleValidator } from './schedule.validator.js'
import express from 'express'

export const scheduleRouter = express.Router()

scheduleRouter.post('/', scheduleValidator, ScheduleController.create)

scheduleRouter.patch('/:idSchedule', scheduleValidator, ScheduleController.update)

scheduleRouter.delete('/:idSchedule', ScheduleController.delete)

scheduleRouter.get('/', ScheduleController.findWrapper)

scheduleRouter.get('/:idSchedule', ScheduleController.findByScheduleById)

scheduleRouter.get('/', ScheduleController.findAllSchedule)
