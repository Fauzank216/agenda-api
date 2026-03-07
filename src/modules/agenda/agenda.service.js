import { BadRequestError } from "../../utils/errors/badRequestError.js";
import { AgendaModel } from "./agenda.model.js";

export class AgendaService {
    static create = async function ({ id_schedule, id_user, created_at, note }) {
        let isAgendaExist = await AgendaModel.isAgendaExist({ id_schedule, created_at })
        console.log(isAgendaExist)
        if (isAgendaExist.length > 0) {
            throw new BadRequestError('Agenda sudah diisi')
        }

        let insertId = await AgendaModel.create({ id_schedule, id_user, created_at, note })

        let result = await AgendaModel.findById(insertId)
        return {
            success: true,
            message: 'Berhasil menambahkan data',
            data: result
        }
    }

    static findAll = async function (criteria) {
        let result = await AgendaModel.findAll({ ...criteria })
        return {
            success: true,
            message: 'Berhasil mendapatkan semua data',
            data: result
        }
    }

    static findById = async function (id_agenda) {
        let result = await AgendaModel.findById(id_agenda)
        if (!result) {
            throw new BadRequestError('Terjadi kesalahan saat mencari agenda')
        }
        return {
            success: true,
            message: 'Berhasil mendapatkan data'
        }
    }

    static update = async function ({ id_agenda, note }) {
        let updatedAgenda = await AgendaModel.updateNote({ id_agenda, note })
        let result = null
        console.log(updatedAgenda)
        if(updatedAgenda.affectedRows > 0){
            result = await AgendaModel.findById(id_agenda)
        }
        return {
            success: true,
            message: 'Berhasil memperbarui data',
            data: result
        }
    }

    static delete = async function (id_agenda) {
        let result = await AgendaModel.delete(id_agenda)
        return {
            success: true,
            message: 'Berhasil menghapus data',
            data: result
        }
    }
}