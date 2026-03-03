import { runQuery } from '../../utils/tryCatch.wrapper.js'
export class ScheduleModel {

    static async #findScheduleBy(params) {
        let values = []
        let conditions = []
        const keysMapping = {
            'id_semester': 't_semester.id = ?',
            'id_schedule': 't_schedules.id = ?',
            'id_user': 't_users.id = ?',
            'day': 't_schedules.day = ?',
            'id_class': 't_class.id = ?',
            'now': 't_schedules.time_end > ?',
            'upcoming': 't_schedules.time_start > ?'
        }
        let query = `
        SELECT t_schedules.id, t_users.name, t_users.avatar, t_subjects.subject_name, t_class.class_name, t_schedules.day, t_schedules.time_start, t_schedules.time_end FROM t_schedules
        JOIN t_users ON t_schedules.id_user = t_users.id
                       JOIN t_class ON t_schedules.id_class  = t_class.id
                       JOIN t_subjects ON t_schedules.id_subject = t_subjects.id
                       JOIN t_semester ON t_semester.id = t_schedules.id_semester `

        Object.keys(params).forEach(key => {
            if (key in keysMapping) {
                conditions.push(keysMapping[key])
                values.push(params[key])
            } else {
                throw new Error(`Key ${key} tidak cocok`)
            }
        })

        if (conditions.length > 0) {
            query += 'WHERE ' + conditions.join(' AND ')
        }

        let result = await runQuery(query, values)
        return result
    }

    static isHaveSchedule = async function ({ idUser, timeStart, idClass, day, idSemester }) {
        const query = `
        SELECT id FROM t_schedules  
        WHERE t_schedules.id_semester = ?
        && t_schedules.day = ?
        && t_schedules.time_start = ? 
        && (t_schedules.id_class = ? || t_schedules.id_user = ?) `
        let result = await runQuery(query, [idSemester, day, timeStart, idClass, idUser])
        console.log(result)
        return result
    }

    static create = async function ({ idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd }) {

        const query = 'INSERT INTO t_schedules (id_user, id_class, id_subject, id_semester, day, time_start, time_end) VALUES (?, ?, ?, ?, ?, ?, ?)'
        let result = await runQuery(query, [idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd])

        return result.insertId

    }

    static update = async function ({ idUser, idClass, idSemester, day, timeStart, timeEnd, idSubject, idSchedule }) {
        const query = 'UPDATE t_schedules SET id_user = ?, id_class = ?, id_subject = ?, id_semester = ?, day = ?, time_start = ?, time_end = ? WHERE id = ?'
        let result = await runQuery(query, [idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule])
        return true
    }

    static delete = async function (idSchedule) {
        const query = 'DELETE FROM t_schedules WHERE id = ? '
        let result = await runQuery(query, [idSchedule])
        return result
    }

    static findByScheduleId = async function (id_schedule) {
        let result = await ScheduleModel.#findScheduleBy({ id_schedule })
        return result
    }

    static findAllSchedule = async function (criteria) {
        let result = await ScheduleModel.#findScheduleBy({ ...criteria })
        return result
    }
}