import { connection } from "../../../config/db/config.db.js";

export class StudentModel {
    static create = async function(nisn, name, gender, phone_parent) {
        let main = null
        try{
            main = await connection()
            const query = "INSERT INTO t_students (nisn, name, gender, phone_parent) VALUES(?, ?, ?, ?)"
            let [QueryResult] = await main.query(query, [nisn, name, gender, phone_parent])
            return {
                id:QueryResult.insertId,
                nisn,
                name,
                gender,
                phone_parent
            }
        }finally{
           await main.end()
        }
    }

    static findAll = async function() {
        let main = null
        try{
            main = await connection()
            const query = "SELECT * FROM t_students"
            let [QueryResult] = await main.query(query)
            return QueryResult
        }finally{
           await main.end()
        }
    }

     static update = async function(idStudent, nisn, name, gender, phone_parent) {
        let main = null
        try{
            main = await connection()
            const query = "UPDATE t_students SET nisn = ?, name = ?, gender = ?, phone_parent = ? WHERE id = ?"
            let [QueryResult] = await main.query(query, nisn, name, gender, phone_parent, idStudent)
            return QueryResult
        }finally{
           await main.end()
        }
    }

    static delete = async function(idStudent) {
        let main = null
        try{
            main = await connection()
            const query = "DELETE FROM t_students WHERE id = ?"
            let [QueryResult] = await main.query(query, idStudent)
            return QueryResult
        }finally{
           await main.end()
        }
    }

    static findByNisn = async function(nisn) {
        let main = null
        try{
            main = await connection()
            const query = "SELECT * FROM t_students WHERE nisn = ?"
            let [QueryResult] = await main.query(query, nisn)
            return QueryResult
        }finally{
           await main.end()
        }
    }

    static findById = async function(idStudent) {
        let main = null
        try{
            main = await connection()
            const query = "SELECT * FROM t_students WHERE id = ?"
            let [QueryResult] = await main.query(query, idStudent)
            return QueryResult
        }finally{
           await main.end()
        }
    }
}