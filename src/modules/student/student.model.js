import { connection } from "../../../config/db/config.db.js";
import { runQuery } from "../../utils/tryCatch.wrapper.js";

export class StudentModel {
    static #baseQuery = "SELECT * FROM t_students"

    static create = async function ({ nisn, name, gender, phone_parent }) {
        const query = "INSERT INTO t_students (nisn, name, gender, phone_parent) VALUES(?, ?, ?, ?)"
        let result = await runQuery(query, [nisn, name, gender, phone_parent])
        return result.insertId
    }

    static findAll = async function (criteria) {
        let conditions = []
        let values = []
        let query = StudentModel.#baseQuery
        let allowedKeys = {
            'search': 't_students.name LIKE "%?%" OR t_students.nisn LIKE "%?%"',
            'nisn': 't_students.nisn = ?',
            'gender': 't_students.gender = ?',
            'status': 't_students.status = ?'
        }

        Object.keys(criteria).forEach(key => {
            if (key in allowedKeys && criteria[key] !== undefined) {
                conditions.push(allowedKeys[key])
                values.push(criteria[key])
            } else {
                throw Error(`${key}, tidak cocok`)
            }
        })

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ')
        }

        let result = await runQuery(query, values)
        return result
    }

    static #updateStudent = async function (id, data) {
        const allowedColumn = ['nisn', 'name', 'gender']
        let query = 'UPDATE t_students SET nisn = ?, name = ?, gender = ?'

        let values = []

        Object.keys(data).forEach(key => {
            if (key in allowedColumn) {
                query += `${allowedColumn[key]} = ?`
                values.push(data[key])
            } else {
                throw Error(`${key}, tidak cocok`)
            }
        })

        if (columns.length > 0) {
            query += `WHERE id = ?`
        }

        let result = await runQuery(query, [...values, id])
        return result.affectedRows
    }

    static update = async function (id_student, data) {
        let result = await StudentModel.#updateStudent(id, data)
        result
    }

    static delete = async function (id_student) {
        const query = "DELETE FROM t_students WHERE id = ?"
        let result = await runQuery(query, [id_student])
        result.affectedRows
    }

    static findById = async function (id_student) {
        const query = StudentModel.#baseQuery + ` WHERE id = ?`
        let result = await runQuery(query, [id_student])
        return result
    }

    static findAbcentStats = async function (id_student) {
        const query = `SELECT status_attendance FROM t_agenda_details WHERE id_class_member = ?`
        let result = await runQuery(query, [id_student])
        return result
    }

    static findMeetingStats = async function () {
        const query = `
                       SELECT t_students.id, t_students.name, 
                       COUNT(t_agenda_details.id_agenda) as total_meetings FROM t_students
                       INNER JOIN t_class_members ON t_class_members.id_student = t_students.id
                       INNER JOIN t_agenda_details ON t_agenda_details.id_class_member = t_class_members.id
                       GROUP BY t_students.id
                    `
         let result = await runQuery(query, [])
         return result           
    }

}
