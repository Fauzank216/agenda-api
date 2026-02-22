import { runQuery } from '../../utils/tryCatch.wrapper.js'
export class ScheduleModel {

    static async #findScheduleBy(targetCriteria, values) {

        const criteria =
        {
            'id': 't_schedules.id = ?',
            'semester': 't_semester.id = ?',
            'idUser': 't_users.Id = ? && t_semester.id = ?',
            'today': 't_schedules.day = ? && t_semester.id = ?',
            'class': 't_class.id = ? && t_semester.id = ?',
            'now': 't_schedules.time_start = ? && t_semester.id = ?',
            'upcoming': 't_schedules.time_start > ? && t_semester.id = ?'
        }

        const query = `
                       SELECT t_schedules.id, t_users.Name, t_users.Avatar, t_subjects.subject_name, t_class.class_name, t_schedules.day, t_schedules.time_start, t_schedules.time_end FROM t_schedules
                       JOIN t_users ON t_schedules.id_user = t_users.Id
                       JOIN t_class ON t_schedules.id_class  = t_class.id
                       JOIN t_subjects ON t_schedules.id_subject = t_subjects.id
                       JOIN t_semester ON t_semester.id = t_schedules.id_semester 
                       WHERE ${criteria[targetCriteria]}`
        let result = await runQuery(query, values)
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

    static findAllSchedule = async function ({ idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('semester', [idSemester])
        return result
    }

    static findByTeacherId = async function ({ idUser, idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('idUser', [idUser, idSemester])
        return result
    }

    static findByDay = async function ({ day, idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('today', [day, idSemester])
        return result
    }

    static findByClass = async function ({ idClass, idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('class', [idClass, idSemester])
        return result
    }

    static findByNow = async function ({ time, idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('now', [time, idSemester])
        return result
    }

    static findUpcomingSchedule = async function ({ time, idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('upcoming', [time, idSemester])
        return result
    }

    static findByScheduleId = async function (idSchedule) {
        let result = await ScheduleModel.#findScheduleBy('id', [idSchedule])
        return result
    }

    static findBySemester = async function ({ idSemester }) {
        let result = await ScheduleModel.#findScheduleBy('semester', [idSemester])
        return result
    }
}