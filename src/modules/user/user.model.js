import { runQuery } from "../../utils/tryCatch.wrapper.js"
export class UserModel {

    static create = async function ({name, username, email, hashedPassword}) {
        const query = 'INSERT INTO t_users(Name, Username, Email, Password) VALUES(?, ?, ?, ?)'
        let result = await runQuery(query, [name, username, email, hashedPassword])
        return result.insertId
    }

    static findAll = async function () {
        const query = 'SELECT * FROM t_users WHERE Role = "Teacher"'
        let result = await runQuery(query, [])
        return result
    }

    static update = async function ({userId, newName, newUsername, newEmail}) {
        const query = 'UPDATE t_users SET Name = ?, Username = ?, Email = ? WHERE Id = ? '
        let result = await runQuery(query, [ newName, newUsername, newEmail, userId])
        return result.insertId
    }

    static delete = async function (userId) {
        const query = 'DELETE FROM t_users WHERE id = ?'
        let result = await runQuery(query, [userId])
        return result
    }

    static updateStatus = async function ({newStatus, userId}) {
        const query = 'UPDATE t_users SET Status = ? WHERE Id = ?'
        let result = await runQuery(query, [newStatus, userId])
        return result
    }

    static updatePassword = async function ({hashedPassword, userId}) {
        const query = 'UPDATE t_users SET Password = ? WHERE Id = ?'
        let result = await runQuery(query, [hashedPassword, userId])
        return result
    }

    static updateAvatar = async function ({userId, newAvatar}) {
        const query = 'UPDATE t_users SET Avatar = ? WHERE Id = ?'
        let result = await runQuery(query, [newAvatar, userId])
        return userId
    }

    static findByEmail = async function (email) {
        const query = 'Select * FROM t_users WHERE Email = ?'
        let result = await runQuery(query, [email])
        return result
    }

    static findByName = async function (name) {
        const query = 'SELECT * FROM t_users WHERE Name LIKE ?'
        let result = await runQuery(query, [`%${name}%`])
        return result
    }

    static findById = async function (userId) {
        const query = 'SELECT * FROM t_users WHERE Id = ?'
        let result = await runQuery(query, [userId])
        return result
    }
}