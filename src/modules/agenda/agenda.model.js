import { runQuery } from '../../utils/tryCatch.wrapper.js'
export class AgendaModel {
    static async #findAgendaBy(params) {
        console.log(params)
        const keysMapping = 
            {'id_semester':'t_schedules.id_semester = ?',
             'date_start':'t_agendas.created_at >= ?',
             'date_end':'t_agendas.created_at <= ?',
             'id_user': 't_schedules.id_user = ?',
             'id_class':'t_schedules.id_class = ?',
             'id_agenda':'t_agendas.id = ?'
            }
        let values = []
        let conditions = []
        let query =  `
                        SELECT t_agendas.id, t_users.name AS 'Guru', t_class.class_name, t_subjects.subject_name,t_semester.academic_year, t_agendas.note, t_agendas.created_at 
                        FROM t_agendas 
                        INNER JOIN t_users 
                        ON t_users.id = t_agendas.id_user
                        INNER JOIN t_schedules 
                        ON t_schedules.id = t_agendas.id_schedule
                        INNER JOIN t_semester
                        ON t_semester.id = t_schedules.id_semester
                        INNER JOIN t_subjects 
                        ON t_subjects.id = t_schedules.id_subject
                        INNER JOIN t_class 
                        ON t_class.id = t_schedules.id_class`
        Object.keys(params).forEach(key => {
            if(key in keysMapping){
                conditions.push(keysMapping[key])
                values.push(params[key])
            }else{
                throw new Error(`Key ${key} tidak cocok`)
            }
        })                

        if(conditions.length > 0){
            query += ` WHERE ` + conditions.join(' AND ')
        }

        let result = await runQuery(query, values)
        console.log(result)
        return result
    }
    static create = async function (conn, dataAgenda) {
        const query = 'INSERT INTO t_agendas (id_schedule, id_user, created_at, note) VALUES (?, ?, ?, ?)'
        let [result] = await conn.query(query, [dataAgenda.id_schedule, dataAgenda.id_user, dataAgenda.created_at, dataAgenda.note])
        return result.insertId
    }

    static updateNote = async function ({id_agenda, note}) {
        const query = 'UPDATE t_agendas SET note = ? WHERE id = ?'
        let result = await runQuery(query, [note, id_agenda])
        return result
    }

    static delete = async function (id_agenda) {
        const query = 'DELETE FROM t_agendas WHERE id = ?'
        let result = await runQuery(query, [id_agenda])
        return result
    }
    
    static isAgendaExist = async function({id_schedule, created_at}) {
        const query = 'SELECT * FROM t_agendas WHERE id_schedule = ? AND created_at = ?'
        let result = await runQuery(query, [id_schedule, created_at])
        return result
    }

    static findById = async function(id_agenda) {
        let result = await AgendaModel.#findAgendaBy({id_agenda})
        return result
    }

    static findAll = async function(criteria) {
        //criteria : parameter dinamis yang gunanya supaya bisa melakukan filtering data
        let result = await AgendaModel.#findAgendaBy({...criteria})
        return result
    }
}