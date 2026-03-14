import { runQuery } from "../../utils/tryCatch.wrapper";

export class MajorModel {
    static create = async function ({ major_code, major_name }) {
        const query = 'INSERT INTO t_majors (major_code, major_name) VALUES(?, ?)'
        let result = await runQuery(query, [major_code, major_name])
        return result.insertId
    }

    static update = async function ({ major_code, major_name, id_major }) {
        const query = 'UPDATE t_majors SET major_name = ?, major_code = ? WHERE id = ?'
        let result = await runQuery(query, [major_code, major_name, id_major])
        return result.affectedRows
    }

    static delete = async function (id_major) {
        const query = 'DELETE FROM t_majors WHERE id = ?'
        let result = await runQuery(query, [id_major])
        return result.affectedRows
    }

    static findAll = async function () {
        let query = 'SELECT * FROM t_majors'
        let result = await runQuery(query, [])
        return result
    }

    static findById = async function (id_major) {
        const query = 'SELECT * FROM t_majors WHERE id = ?'
        let result = await runQuery(query, [id_major])
        return result
    }
}