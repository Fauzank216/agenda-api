import { AgendaModel } from "../agenda/agenda.model.js";
import { AgendaDetailModel } from "./agenda-detail.model.js";

export class AgendaDetailService {
    static findAll = async function (criteria) {
        let result = await AgendaDetailModel.findAll({...criteria})
        return {
            success: true,
            message: 'Berhasil mendapatkan semua agenda detail',
            data: result
        }
    }

    static update = async function (id, data) {
        await AgendaDetailModel.update({ id, data })
        let result = await AgendaDetailModel.findById(id)
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

    static findByAgendaId = async function (id_agenda) {
        let agenda = await AgendaModel.findById(id_agenda)

        let details = await AgendaDetailModel.findByAgendaId(id_agenda)

        return {
            success: true,
            message: 'Agenda detail berhasil ditemukan',
            data: {
                ...agenda[0],
                details
            }
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