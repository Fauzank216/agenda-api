import { connection } from "../../../config/db/config.db.js"
export class UserModel {
    static create = async function (name, username, email, password) {
        let main = null
        try {
            main = await connection()
            let query = 'INSERT INTO t_users(Name, Username, Email, Password) VALUES(?, ?, ?, ?)'
            let [QueryResult] = await main.query(query, [name, username, email, password])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static findAll = async function () {
        let main = null
        try {
            main = await connection()
            let query = 'SELECT * FROM t_users WHERE Role = "Teacher"'
            let [QueryResult] = await main.query(query)
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static update = async function (userId, newName, newUsername, newEmail, password) {
        let main = null
        try {
            main = await connection()
            let query = 'UPDATE t_users SET Name = ?, Username = ?, Email = ?, Password = ? WHERE Id = ?'
            let [QueryResult] = await main.query(query, [newName, newUsername, newEmail, password, userId])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static delete = async function (userId) {
        let main = null
        try {
            main = await connection()
            let query = 'DELETE FROM t_users WHERE id = ?'
            let [QueryResult] = await main.query(query, [userId])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static updateStatus = async function (userId, newStatus) {
        let main = null
        try {
            main = await connection()
            let query = 'UPDATE t_users SET Status = ? WHERE Id = ?'
            let [QueryResult] = await main.query(query, [newStatus, userId])
            return QueryResult

        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static updatePassword = async function (userId, newPassword) {
        let main = null
        try {
            main = await connection()
            let query = 'UPDATE t_users SET Password = ? WHERE Id = ?'
            let [QueryResult] = await main.query(query, [newPassword, userId])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static updateAvatar = async function (userId, newAvatar) {
        let main = null
        try {
            main = await connection()
            let query = 'UPDATE t_users SET Avatar = ? WHERE Id = ?'
            let [QueryResult] = await main.query(query, [newAvatar, userId])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static findByEmail = async function (email) {
        let main = null
        try {
            main = await connection()
            let query = 'Select * FROM t_users WHERE Email = ?'
            let [QueryResult] = await main.query(query, [email])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }

    static findById = async function (userId) {
        let main = null
        try {
            const query = 'SELECT * FROM t_users WHERE Id = ?'
            main = await connection()
            let [QueryResult] = await main.query(query, [userId])
            return QueryResult
        } finally {
            if (main) {
                await main.end()
            }
        }
    }
}