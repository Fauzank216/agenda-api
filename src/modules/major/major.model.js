import { connection } from "../../../config/db/config.db.js";

export class MajorModel {
    static create = async function (name, fullName) {
        let main = null
        try {
            const query = 'INSERT INTO t_majors (Name, Full_name) VALUES(?, ?)'
            main = await connection()
            let [QueryResult] = main.query(query, [name, fullName])
            return QueryResult
        } finally {
            await main.end()
        }
    }

    static update = async function (majorId, newName, newFullName) {
        let main = null
        try {
            const query = 'UPDATE t_majors SET Name = ?, Full_name = ? WHERE Id = ?'
            main = await connection()
            let [QueryResult] = main.query(query, [newName, newFullName, majorId])
            return QueryResult
        } finally {
            await main.end()
        }
    }

    static delete = async function (majorId) {
        let main = null
        try {
            const query = 'DELETE FROM t_majors WHERE Id = ?'
            main = await connection()
            let [QueryResult] = await main.query(query, [majorId])
            return QueryResult
        } finally {
            await main.end()
        }
    }

    static findAll = async function () {
        let main = null
        try {
            const query = 'SELECT * FROM t_majors'
            main = await connection()
            let [QueryResult] = await main.query(query)
            return QueryResult
        } finally {
            await main.end()
        }
    }

    static findByName = async function (name) {
        let main = null
        try {
            const query = 'SELECT * FROM t_majors WHERE Name = ?'
            main = await connection()
            let [QueryResult] = await main.query(query, [name])
            return QueryResult
        } finally {
            await main.end()
        }
    }

    static findById = async function (majorId) {
        let main = null
        try {
            const query = 'SELECT * FROM t_majors WHERE Id = ?'
            main = await connection()
            let [QueryResult] = await main.query(query, [majorId])
            return QueryResult
        } finally {
            main.end()
        }
    }
}