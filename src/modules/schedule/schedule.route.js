import { ScheduleController } from "./schedule.controller.js";
import { scheduleValidator } from './schedule.validator.js'
import { authorizationMiddleware } from '../../middlewares/authorisation.middleware.js'
import express from 'express'
import { authJwt } from "../../middlewares/auth.middleware.js";

export const scheduleRouter = express.Router()

scheduleRouter.use(authJwt)

const setScheduleCriteria = async (req, res, next) => {
  let { id, role } = req.user
  let currentSemester = 1
  const allowedQuery = ['id_semester', 'id_class', 'day', 'time', 'id_user']

  req.criteria = {}
  if (role == 'admin') {
    if (!req.query.id_semester) {
        req.criteria.id_semester = currentSemester
    }
  } else if (role == 'teacher') {
    req.criteria.id_semester = currentSemester
    req.criteria.id_user = id
  }
  
  allowedQuery.forEach(key => {
    if (req.query[key] && !req.criteria[key]) {
        req.criteria[key] = req.query[key]
    }
  })

  next()
}

//create schedule
scheduleRouter.post('/', authorizationMiddleware('admin'), scheduleValidator, ScheduleController.create)

//update schedule
scheduleRouter.patch('/:id_schedule', authorizationMiddleware('admin'), ScheduleController.update)

//delete schedule
scheduleRouter.delete('/:id_schedule', authorizationMiddleware('admin'), ScheduleController.delete)

//findByScheduleId
scheduleRouter.get('/:id_schedule', ScheduleController.findByScheduleById)

//findAllSchedule
scheduleRouter.get('/', setScheduleCriteria, ScheduleController.findAllSchedule)

