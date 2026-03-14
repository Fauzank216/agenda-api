import { runQuery } from '../../utils/tryCatch.wrapper.js'

export class SemesterModel {
    static create = async function ({ academic_year, date_start, date_end, term, status }) {
        const query = 'INSERT INTO t_semesters (academic_year, date_start, date_end, term, status) VALUES(?, ?, ?, ?, ?)'
        let result = await runQuery(query, [academic_year, date_start, date_end, term, status])
        return result.insertId
    }

    static update = async function ({ academic_year, date_start, date_end, term, status, id_semester }) {
        const query = 'UPDATE t_semesters SET academic_year = ?, date_start = ?, date_end = ?, term = ?, status = ? WHERE id_semester = ?'
        let result = await runQuery(query, [academic_year, date_start, date_end, term, status, id_semester])
        return result.affectedRows
    }

    static findAll = async function () {
        const query = 'SELECT * FROM t_semesters'
        let result = await runQuery(query, [])
        return result
    }

    static findById = async function(id_semester) {
        const query = 'SELECT * FROM t_semesters WHERE id = ?'
        let result = await runQuery(query, [id_semester])
        return result
    }

    static delete = async function (id_semester) {
        const query = 'DELETE FROM t_semesters WHERE id = ?'
        let result = await runQuery(query, [id_semester])
        return result.affectedRows
    }
}