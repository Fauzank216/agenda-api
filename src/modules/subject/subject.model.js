import { runQuery } from '../../utils/tryCatch.wrapper.js'
export class SubjectModel {
    static create = async function (subject_name) {
        const query = 'INSERT INTO t_subjects (subject_name, term)'
        let result = await runQuery(query, [subject_name])
        return result.insertId
    }

    static findAll = async function () {
        const query = 'SELECT * FROM t_subjects'
        let result = await runQuery(query, [])
        return result
    }

    static update = async function ({subject_name, id_subject}) {
        const query = 'UPDATE t_subjects SET subject_name = ?, category = ? WHERE id = ?'
        let result = await runQuery(query, [subject_name, id_subject])
        return result.affectedRows
    }

    static delete = async function (id_subject) {
        const query = 'DELETE FROM t_subjects WHERE id = ?'
        let result = await runQuery(query, [id_subject])
        return result.affectedRows
    }

    static findById = async function (id_subject) {
        const query = 'SELECT * FROM t_subjects WHERE id = ?'
        let result = await runQuery(query, [id_subject])
        return result
    }
}