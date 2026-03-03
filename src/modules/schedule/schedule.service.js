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

    static findByScheduleById = async function (id_schedule) {
        let result = await ScheduleModel.findByScheduleId(id_schedule)
        return result
    }

    static findAllSchedule = async function (criteria) {
        let result = await ScheduleModel.findAllSchedule({...criteria})
        return result
    }

}