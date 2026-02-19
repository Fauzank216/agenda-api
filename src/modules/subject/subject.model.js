import { connection } from "../../../config/db/config.db.js";

export class SubjectModel {
    static create = async function(subjectName, category) {
        let main = null
        try{
            main = await connection()
            const query = 'INSERT INTO t_subjects (subject_name, category)'
            let [QueryResult] = await main.query(query, [subjectName, category])
            return {
                id:QueryResult.insertId,
                subjectName,
                category,
            }
        }finally{
            await main.end()
        }
    }

    static findAll = async function() {
        let main = null
        try{
            main = await connection()
            const query = 'SELECT * FROM t_subjects'
            let [QueryResult] = await main.query(query)
            return QueryResult
        }finally{
            await main.end()
        }
    }

    static update = async function(subjectName, category, idSubject) {
        let main = null
        try{
            main = await connection()
            const query = 'UPDATE t_subjects SET subject_name = ?, category = ? WHERE id = ?'
            let [QueryResult] = await main.query(query, [subjectName, category, idSubject])
            return {
                id:QueryResult.insertId,
                subjectName,
                category
            }
        }finally{
            await main.end()
        }
    }

    static delete = async function(idSubject) {
        let main = null
        try{
            main = await connection()
            const query = 'DELETE FROM t_subjects WHERE id = ?'
            let [QueryResult] = await main.query(query, [idSubject])
            return QueryResult
        }finally{
            await main.end()
        }
    }

    static findById = async function(idSubject) {
        let main = null
        try{
            main = await connection()
            const query = 'SELECT * FROM t_subjects WHERE id = ?'
            let[QueryResult] = await main.query(query, [idSubject])
            return QueryResult
        }finally{
            await main.end()
        }
    }
}