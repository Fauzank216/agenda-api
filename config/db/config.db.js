import mysql from 'mysql2/promise'

export async function connection() {
    const main = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"db_agenda_guru"
    })
    return main
}