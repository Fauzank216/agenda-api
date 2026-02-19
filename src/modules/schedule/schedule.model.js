import { connection } from '../../../config/db/config.db.js'

export class ScheduleModel {
    static create = async function (idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd) {
        let main = null
        const query = 'INSERT INTO (id_user, id_class, id_subject, id_semester, day, time_start, time_end) VALUES (?, ?, ?, ?, ?, ?, ?)'
        try {
            main = await connection()
            let [QueryResult] = await main.query(query, [idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd])

            return {
                id: QueryResult.insertId,
                idUser,
                idClass,
                idSubject,
                day,
                timeStart,
                timeEnd
            }
        } finally {
            await main.end()
        }
    }

    static findAll = async function () {
        let main = null
        const query = 'SELECT * FROM t_schedules'
        try {
            main = await connection()
            let [QueryResult] = await main.query(query)
            return QueryResult
        } finally {
            await main.end()
        }
    }

    static update = async function (idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSubject, idSchedule) {
        let main = null
        const query = 'UPDATE t_schedules SET idUser = ?, idClass = ?, idSubject = ?, idSemester = ?, day = ?, timeStart = ?, timeEnd = ? WHERE id = ?'
        try {
            main = await connection()
            let [QueryResult] = await main.query(query, [idUser, idClass, idSubject, idSemester, day, timeStart, timeEnd, idSchedule])
            return {
                id,
                idUser,
                idClass,
                idSubject,
                idSemester,
                day,
                timeStart,
                timeEnd
            }
        } finally {
            await main.end()
        }
    }

    static delete = async function (idSchedule) {
        let main = null
        const query = 'DELETE FROM t_schedules WHERE id = ? '
        try {
            main = await connection()
            let [QueryResult] = await main.query(query, [idSchedule])
            return null
        } finally {
            await main.end()
        }
    }
}