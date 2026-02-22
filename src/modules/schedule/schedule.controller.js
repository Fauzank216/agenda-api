import { ScheduleService } from "./schedule.service.js";
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'

export class ScheduleController {

    static findWrapper = tryCatchWrapper(async (req, res) => {
        let { idUser, day, idClass, status, idSemester } = req.query

        let result;

        if (idClass) {
            result = await ScheduleController.findByClass({ idClass, idSemester });
        } else if (idUser) {
            result = await ScheduleController.findByTeacherId({ idUser, idSemester });
        } else if (day) {
            result = await ScheduleController.findByDay({ day, idSemester });
        } else if (status === 'now') {
            result = await ScheduleController.findByNow({ idSemester });
        } else if (status === 'upcoming') {
            result = await ScheduleController.findUpcomingSchedule({ idSemester });
        } else if (idSemester) {
            result = await ScheduleController.findBySemester({ idSemester });
        } else {
            return res.status(400).json({ message: "Parameter tidak lengkap" });
        }

        return res.status(200).json(result);
    }
    )
    static create = tryCatchWrapper(async (req, res, next) => {
        let result = await ScheduleService.create(req.body)
        return res.status(201).json(result)
    })

    static update = tryCatchWrapper(async (req, res, next) => {
        let idSchedule = req.params.idSchedule
        req.body.idSchedule = idSchedule
        let result = await ScheduleService.update(req.body)
        return res.status(201).json(result)
    })

    static delete = tryCatchWrapper(async (req, res, next) => {
        let idSchedule = req.params.idSchedule
        let result = await ScheduleService.delete(idSchedule)
        return res.status(201).json(result)
    })

    static findAllSchedule = tryCatchWrapper(async function () {
        let result = await ScheduleService.findAllSchedule()
        return result
    })

    static findBySemester = async function ({ idSemester }) {
        let result = await ScheduleService.findBySemester({ idSemester })
        return result
    }

    static findByTeacherId = async function ({ idUser, idSemester }) {
        let result = await ScheduleService.findByTeacherId({ idUser, idSemester })
        return result
    }

    static findByDay = async function ({ day, idSemester }) {
        let result = await ScheduleService.findByDay({ day, idSemester })
        return result
    }

    static findByClass = async function ({ idClass, idSemester }) {
        let result = await ScheduleService.findByClass({ idClass, idSemester })
        return result
    }

    static findByNow = async function ({ idSemester }) {
        let time = new Date().getTime().toLocaleString('id-ID')
        let result = await ScheduleService.findByNow({ time, idSemester })
        return result
    }

    static findUpcomingSchedule = async function ({ idSemester }) {
        let time = new Date().getTime().toLocaleString('id-ID')
        let result = await ScheduleService.findUpcomingSchedule({ time, idSemester })
        return result
    }

    static findByScheduleById = async function (req, res, next) {
        let { idSchedule } = req.params
        let result = await ScheduleService.findByScheduleById(idSchedule)
        return res.status(200).json(result)
    }
}