import { BadRequestError } from "../../utils/errors/badRequestError.js";
import { AgendaModel } from "./agenda.model.js";
import { connection } from "../../../config/db/config.db.js";
import { AgendaDetailModel } from "../agenda_detail/agenda-detail.model.js";
export class AgendaService {
    static create = async function (dataAgenda, dataDetail) {
        let main = null
        try {
            main = await connection()
            await main.beginTransaction()

            let id_agenda = await AgendaModel.create(main, dataAgenda)

            let createDetail = await AgendaDetailModel.create(main,
                dataDetail.map(d =>
                    [
                        id_agenda,
                        d.id_class_member,
                        d.status_attendance,
                        d.note
                    ]
                )
            )

            await main.commit()
            let result = await AgendaModel.findById(id_agenda)
            return {
                success: true,
                message: 'Berhasil menambahkan data',
                data: result
            }

        } catch (err) {
            await main.rollback()
            throw err
        } finally {
            await main.end()
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

    static updateNote = async function ({ id_agenda, note }) {
        let updatedAgenda = await AgendaModel.updateNote({ id_agenda, note })
        let result = null
       
        if (updatedAgenda.affectedRows > 0) {
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