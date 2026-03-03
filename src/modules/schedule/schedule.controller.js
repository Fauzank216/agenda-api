import { ScheduleService } from "./schedule.service.js";
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'
import { param } from "express-validator";

export class ScheduleController {
    static create = tryCatchWrapper(async (req, res, next) => {
        let result = await ScheduleService.create(req.body)
        return res.status(201).json(result)
    })

    static update = tryCatchWrapper(async (req, res, next) => {
        let id_schedule = req.params.id_schedule
        req.body.id_schedule = id_schedule
        let result = await ScheduleService.update(req.body)
        return res.status(201).json(result)
    })

    static delete = tryCatchWrapper(async (req, res, next) => {
        let id_schedule = req.params.id_schedule
        let result = await ScheduleService.delete(id_schedule)
        return res.status(201).json(result)
    })

    static findByScheduleById = tryCatchWrapper(async function (req, res) {
        let { id_schedule } = req.params
        let result = await ScheduleService.findByScheduleById(id_schedule)
        return res.status(200).json(result)
    })

    static findAllSchedule = tryCatchWrapper(async function (req, res) {
        let result = await ScheduleService.findAllSchedule(req.criteria)
        return res.status(200).json(result)
    })
}