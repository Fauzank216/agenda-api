import { ScheduleModel } from "./schedule.model.js";

export class ScheduleService {
    static create = async function(idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd) {

        let result = await ScheduleModel.create(idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd)

        return {
            success:true,
            message:'Berhasil menambahkan jadwal',
            data:result
        }
    }

    static findAll = async function() {
        let result = await ScheduleModel.findAll()
        return {
            success:true,
            message:'Berhasil mendapat semua jadwal',
            data:result
        }
    }

    static update = async function(idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule) {
        let result = await ScheduleModel.update(idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule)

        return  {
            success:true,
            message:'Berhasil memperbarui jadwal',
            data:result
        }
    }
}