import {connection} from '../../../config/db/config.db.js'

export class AgendaDetailModel {
     static create = async function(idAgenda, idClassMember, statusAttendance) {
        let main = null
        const query = 'INSERT INTO t_agenda_details (id_agenda, id_class_member, status_attendance, note)'
        try{
            main = await connection()
            let[QueryResult] = await main.query(query, [idAgenda, idClassMember, statusAttendance, note])

            return {
                id:QueryResult.insertId,
                idAgenda,
                idClassMember, 
                statusAttendance, 
                note
            }

        }finally{
            await main.end()
        }
     }

     static findAll = async function() {
        let main = null
        const query = 'SELECT * FROM t_agenda_details'
        try{
            main = await connection()
            let[QueryResult] = await main.query(query)
            return QueryResult
        }finally{
            await main.end()
        }
     }

     static update = async function(idAgenda, idClassMember, statusAttendance, note = "", idAgendaDetail) {
        let main = null
        const query = 'UPDATE t_agenda_details SET id_agenda = ? id_class_member, statusAttendance = ?, note = ? WHERE id = ?'

        try{
            main = await connection()
            let[QueryResult] = await main.query(query, [idAgenda, idClassMember, statusAttendance, note, idAgendaDetail])
        }finally{
            await main.end()
        }
     }

     static delete = async function(idAgendaDetail) {
        let main = null
        const query = 'DELETE FROM t_agenda_details WHERE id = ?'
        try{
            main = await connection()
            let[QueryResult] = await main.query(query, [idAgendaDetail])
            return null
        }finally{
            await main.end()
        }
     }
}