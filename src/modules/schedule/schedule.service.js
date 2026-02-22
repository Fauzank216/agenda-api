import { ScheduleModel } from "./schedule.model.js";
import { BadRequestError } from '../../utils/errors/badRequestError.js'
export class ScheduleService {
    static create = async function ({ idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd }) {

        let idSchedule = await ScheduleModel.isHaveSchedule({ idUser, timeStart, idClass, day, idSemester })

        if (idSchedule.length > 0) {
            let result = await ScheduleModel.findByScheduleId(idSchedule[0].id)
            throw new BadRequestError(`Guru (${result[0].Name} sudah ada jadwal di kelas ${result[0].class_name})`)
        }

        let insertId = await ScheduleModel.create({ idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd })

        let result = await ScheduleModel.findByScheduleId(insertId)

        return {
            success: true,
            message: 'Berhasil Menambahkan data',
            data: result
        }
    }

    static update = async function ({ idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule }) {

        let scheduleId = await ScheduleModel.isHaveSchedule({idUser, idSemester, idClass, day, timeStart})
        console.log(scheduleId)
        if (scheduleId.length < 1) {
            let result = await ScheduleModel.findByScheduleId(scheduleId[0].id)
            throw new BadRequestError(`Guru (${result[0].Name}) sudah ada jadwal di kelas ${result[0].class_name}`)
        }

        await ScheduleModel.update({ idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule })

        let result = await ScheduleModel.findByScheduleId(scheduleId[0].id)

        return {
            success: true,
            message: 'Berhasil Memperbarui data',
            data: result
        }
    }

    static delete = async function (idSchedule) {
        await ScheduleModel.delete(idSchedule)
        return {
            success: true,
            message: 'Berhasil Menghapus data',
            data: null
        }
    }

    static findAllSchedule = async function () {
        let idSemester = await SemesterModel.findByNow()
        let result = await ScheduleModel.findAllSchedule({idSemester})
        return result
    }

    static findBySemester = async function ({idSemester}) {
        let result = await ScheduleModel.findBySemester({idSemester})
        return result
    }

    static findByTeacherId = async function ({ idUser, idSemester }) {
        let result = await ScheduleModel.findByTeacherId({ idUser, idSemester })
        return {
            success: true,
            message: 'Berhasil Mendapatkan data',
            data: result
        }
    }

    static findByDay = async function ({ day, idSemester }) {
        let result = await ScheduleModel.findByDay({ day, idSemester })
        return result
    }

    static findByClass = async function ({ idClass, idSemester }) {
        let result = await ScheduleModel.findByClass({ idClass, idSemester })
        return result
    }

    static findByNow = async function ({ time, idSemester }) {
        let result = await ScheduleModel.findByNow({ time, idSemester })
        return result
    }

    static findUpcomingSchedule = async function ({ time, idSemester }) {
        let result = await ScheduleModel.findUpcomingSchedule({ time, idSemester })
        return result
    }

    static findByScheduleById = async function (idSchedule) {
        let result = await ScheduleModel.findByScheduleId(idSchedule)
        return result
    }
}