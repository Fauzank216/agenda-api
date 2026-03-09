import { runQuery } from '../../utils/tryCatch.wrapper.js'

export class AgendaDetailModel {

    static async #findBy(params) {
        const keysMapping = {
            'id_agenda': 't_agenda_details.id_agenda = ?',
            'id_student': 't_agenda_details.id_class_member = ?',
            'status': 't_agenda_details.status_attendance = ?'
        }

        let query =
            `
            SELECT t_agenda_details.id, t_students.name, t_agenda_details.status_attendance, t_agenda_details.note FROM t_agenda_details
            INNER JOIN t_class_members ON t_class_members.id = t_agenda_details.id_class_member
            INNER JOIN t_students ON t_students.id = t_class_members.id_student
            `

        let conditions = []
        let values = []
        Object.keys(params).forEach(key => {
            if (key in keysMapping) {
                conditions.push(keysMapping[key])
                values.push(params[key])
            } else {
                throw new Error(`key ${key}, tidak cocok.`)
            }
        })

        if (conditions.length > 0) {
            query += 'WHERE ' + conditions.join(' AND ')
        }

        let result = await runQuery(query, values)
        return result
    }

    static async #updateDetails(id, data) {
        const allowedColumn = { 'status': 'status_attendance = ?', 'note': 'note = ?' }
        let setClause = []
        let values = []
        Object.keys(data).forEach(key => {
            if (key in allowedColumn) {
                setClause.push(allowedColumn[key])
                values.push(data[key])
            }
        })

        if (setClause.length === 0) {
            return null
        }

        values.push(id)

        const query = `UPDATE t_agenda_details SET  ${setClause.join(', ')} WHERE id = ?`

        let result = await runQuery(query, values)

        return result
    }

    static create = async function (conn, dataDetail) {
        const query = 'INSERT INTO t_agenda_details (id_agenda, id_class_member, status_attendance, note) VALUES ? '
        let [result] = await conn.query(query, [dataDetail])
        return result.insertId
    }

    static findAll = async function (criteria) {
        let result = await AgendaDetailModel.#findBy({ ...criteria })
        return result
    }

    static update = async function ({ id, data }) {
        let result = await AgendaDetailModel.#updateDetails(id, data)
        return result
    }

    static findById = async function (id_agenda_details) {
        const query = 'SELECT * FROM t_agenda_details WHERE id = ?'
        let result = await runQuery(query, [id_agenda_details])
        return result
    }

    static findByAgendaId = async function (id_agenda) {
        let result = await AgendaDetailModel.#findBy({id_agenda})
        return result
    }

    static delete = async function (id_agenda_details) {
        const query = 'DELETE FROM t_agenda_details WHERE id = ?'
        let result = await runQuery(query, [id_agenda_details])
        return null
    }
}