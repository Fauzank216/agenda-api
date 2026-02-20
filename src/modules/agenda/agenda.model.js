import { connection } from '../../../config/db/config.db.js';

export class AgendaModel {
    static create = async function(idSchedule, note) {
        let main = null
        const query = 'INSERT INTO (id_schedule, note) VALUES (?, ?)'
        try{
            main = await connection()
            let[QueryResult] = await main.query(query, [idSchedule, note])
            return {
                id:QueryResult.insertId,
                idSchedule,
                note
            }
        }finally{
            await main.end()
        }
    }

    static findAll = async function() {
        let main = null
        const query = 'SELECT * FROM t_schedules'
        try{
            main = await connection()
            let[QueryResult] = await main.query()
            return QueryResult
        }finally{
            await main.end()
        }
    }

    static updateNote = async function(note, idAgenda) {
        let main = null
        const query = 'UPDATE t_schedules SET note = ? WHERE id = ?'
        try{
            main = await connection()
            let[QueryResult] = await main.query(query, [note, idAgenda])
            return{
                id:idAgenda,
                note
            }
        }finally{
            await main.end()
        }
    }

    static delete = async function(idAgenda) {
        let main = null
        const query = 'DELETE FROM t_schedules WHERE id = ?'
        try{
            main = await connection()
            let[QueryResult] = await main.query(query, [idAgenda])
            return null
        }finally{
            await main.end()
        }
    }
}