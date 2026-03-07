import { AgendaDetailModel } from "./agenda-detail.model.js";

export class AgendaDetailService {
    static create = async function ({ id_agenda, id_class_member, id_student, status_attandance, note = "" }) {
        let result = await AgendaDetailModel.create({ id_agenda, id_class_member, id_student, status_attandance, note })
        return {
            success: true,
            message: 'Agenda detail berhasil dibuat',
            data: result
        }
    }

    static findAll = async function () {
        let result = await AgendaDetailModel.findAll()
        return {
            success: true,
            message: 'Berhasil mendapatkan semua agenda detail',
            data: result
        }
    }

    static updateStatus = async function ({ id_agenda_details, statusAttendance }) {
        let result = await AgendaDetailModel.updateStatus({ id_agenda_details, statusAttendance })
        return {
            success: true,
            message: 'Agenda detail berhasil diperbarui',
            data: result
        }
    }

    static updateNote = async function ({ id_agenda_details, note = "" }) {
        let result = await AgendaDetailModel.updateNote({ id_agenda_details, note })
        return {
            success: true,
            message: 'Agenda detail berhasil diperbarui',
            data: result
        }
    }

    static findById = async function (id_agenda_details) {
        let result = await AgendaDetailModel.findById(id_agenda_details)
        return {
            success: true,
            message: 'Agenda detail berhasil ditemukan',
            data: result
        }
    }

    static delete = async function (id_agenda_details) {
        let result = await AgendaDetailModel.delete(id_agenda_details)
        return {
            success: true,
            message: 'Agenda detail berhasil dibuat',
            data: result
        }
    }
}