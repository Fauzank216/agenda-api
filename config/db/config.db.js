import mysql from 'mysql2/promise'

export async function connection() {
    const main = await mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:"",
        database:process.env.DB_NAME
    })
    return main
}