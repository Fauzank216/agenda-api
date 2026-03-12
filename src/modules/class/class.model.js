import { runQuery } from '../../utils/tryCatch.wrapper.js'
export class ClassModel {

    static async #findBy(criteria) {
        const allowedKeys = { 'id_major': 't_majors.id = ?', 'id_class': 't_class.id = ?', 'grade': 't_class.grade = ?' }

        let conditions = []
        let values = []

        let query = `SELECT t_class.id, t_class.grade, t_major.name, t_class.name FROM t_class INNER JOIN       
                     t_majors ON t_majors.id = t_class.id_major`

        Object.keys(criteria).forEach(key => {
            if (key in allowedKeys) {
                conditions.push(allowedKeys[key])
                values.push(criteria[key])
            } else {
                throw Error(`${key}, tidak cocok`)
            }
        })

        if (conditions.length > 0) {
            query += ` WHERE ` + conditions.join(' AND ')
        }

        let result = await runQuery(query, values)
        return result
    }

    static create = async function (name, majorId, grade) {
        const query = 'INSERT INTO t_class(name, id_major, grade) VALUES(?, ?, ?)'
        let result = await runQuery(query, [name, majorId, grade])
        return result.insertId
    }

    static update = async function (id_class, name, id_major, grade) {
        const query = 'UPDATE t_class SET name = ?, majorId = ?, grade = ? WHERE Id = ?'
        let result = await runQuery(query, [name, id_major, grade, id_class])
        return result
    }

    static findAll = async function ({ criteria }) {
        let query = `SELECT t_class.id, t_class.grade, t_major.name, t_class.name FROM t_class INNER JOIN       
                     t_majors ON t_majors.id = t_class.id_major`
        let result = await runQuery(query, [...criteria])
        return result
    }

    static delete = async function (id_class) {
        const query = 'DELETE FROM t_class WHERE id = ?'
        await runQuery(query, id_class)
        return null
    }
}