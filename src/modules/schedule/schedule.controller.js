import { ScheduleService } from "./schedule.service.js";

export class ScheduleController {
    static create = async function(req, res, next) {
        let{idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd} = req.body

        try{
            let result = await ScheduleService.create(idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd)

            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }

    static findAll = async function(req, res, next) {
        try{
            let result = await ScheduleService.findAll()
            return res.status(200).json(result)
        }catch(err){
            next(err)
        }
    }

    static update = async function(req, res, next) {
        let{idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd} = req.body

        let idSchedule = req.params.idSchedule
        try{
            let result = await ScheduleService.update(idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule)

            res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }

    static delete =async function(req, res, next) {
        let idSchedule = req.params.idSchedule
        try{
            let result = await ScheduleService.delete(idSchedule)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
}