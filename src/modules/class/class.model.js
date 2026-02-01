import { connection } from "../../../config/db/config.db.js"
//implement logic
export class ClassModel {
    static create = async function (name, majorId, level) {
        let main = null
        try {
            const query = 'INSERT INTO t_classes(Name, Id_major, Level) VALUES(?, ?, ?)'
            main = await connection()
            let [QeuryResult] = await main.query(query, [name, majorId, level])
            return QeuryResult
        } finally {
            await main.end()
        }
    }

    static update = async function (classId, newName, newMajorId, newLevel) {
        let main = null
        try {
            const query = 'UPDATE t_classes SET Name = ?, majorId = ?, Level = ? WHERE Id = ?'
            main = await connection()
            let [QeuryResult] = await main.query(query, [newName, newMajorId, newLevel, classId])
            return QeuryResult
        } finally {
            await main.end()
        }
    }

    static findAll = async function () {
        let main = null
        try {
            const query = 'SELECT * FROM t_classes'
            main = await connection()
            let [QeuryResult] = main.query()
            return QeuryResult
        } finally {
            await main.end()
        }
    }

    static delete = async function (classId) {
        let main = null
        try {
            const query = 'DELETE FROM t_classes WHERE Id = ?'
            main = await connection()
            let [QeuryResult] = await main.query(query, [classId])
            return QeuryResult
        } finally {
            await main.end()
        }
    }
}