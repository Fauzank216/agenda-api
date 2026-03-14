import {runQuery} from '../../utils/tryCatch.wrapper.js'

export class ClassMemberModel {
    static create = async function({id_class, id_student}) {
        const query = 'INSERT INTO t_class_members (id_class, id_student) VALUES(?, ?)'
        let result = await runQuery(query, [])
        return result.insertId
    }

    static update = async function({id_class, id_student, id_class_member}){
        const query = 'UPDATE t_class_members SET id_class = ?, id_student = ? WHERE id = ?'
        let result = await runQuery(query, [id_class, id_student, id_class_member])
        return result.affectedRows
    }

    static delete = async function(id_class_member) {
        const query = 'DELETE FROM t_class_members WHERE id = ?'
        let result = await runQuery(query, [id_class_member])
        return result.affectedRows
    }

    static findById = async function(id_class_member) {
        const query = 'SELECT * FROM t_class_members WHERE id = ?'
        let result = await runQuery(query, [id_class_member])
        return result
    }

    static findAll = async function() {
        const query = 'SELECT * FROM t_class_members'
        let result = await runQuery(query, [])
        return result
    }
}