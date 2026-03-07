import { runQuery } from '../../utils/tryCatch.wrapper.js'

export class AgendaDetailModel {
    static create = async function ({ id_agenda, id_class_member, id_student, status_attandance, note }) {
        const query = 'INSERT INTO t_agenda_details (id_agenda, id_class_member, id_student, status_attendance, note) VALUES(?, ?, ?, ?, ?)'
        let result = await runQuery(query, [id_agenda, id_class_member, id_student, status_attandance, note])
        return result.insertId
    }

    static findAll = async function () {
        const query = 'SELECT * FROM t_agenda_details'
        let result = await runQuery(query, [])
        return result
    }

    static updateStatus = async function ({ id_agenda_details, status_attandance }) {
        const query = 'UPDATE t_agenda_details SET status = ? WHERE id = ?'
        let result = await runQuery(query, [status_attandance, id_agenda_details])
        return result
    }

    static updateNote = async function ({ id_agenda_details, note }) {
        const query = 'UPDATE t_agenda_details SET note = ? WHERE id = ?'
        let result = await runQuery(query, [note, id_agenda_details])
        return result
    }

    static findById = async function (id_agenda_details) {
        const query = 'SELECT * FROM t_agenda_details WHERE id = ?'
        let result = await runQuery(query, [id_agenda_details])
        return result
    }

    static delete = async function (id_agenda_details) {
        const query = 'DELETE FROM t_agenda_details WHERE id = ?'
        let result = await runQuery(query, [id_agenda_details])
    }
}