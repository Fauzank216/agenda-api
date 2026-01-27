import { connection } from "../../../config/db/config.db.js"
export class UserModel {
    static create = async function (name, username, email, password, avatar) {
        let main = await connection()
        let query = 'INSERT INTO t_users VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
        let [QueryResult] = await main.query(query, [null, name, username, email, password, avatar, null, null])
        return QueryResult
    }

    static findAll = async function () {
        let main = await connection()
        let query = 'SELECT * FROM t_users WHERE Role = Teacher'
        let [QueryResult] = await main.query(query)
        return QueryResult
    }

    static update = async function (idUser, newName, newUsername, newEmail) {
        let main = await connection()
        let query = 'UPDATE t_users SET Name = ?, Username = ?, Email = ?'
        let [QueryResult] = await main.query(query, [newName, newUsername, newEmail, idUser])
        return QueryResult
    }

    static delete = async function (idUser) {
        let main = await connection()
        let query = 'DELETE FROM t_users WHERE id = ?'
        let [QueryResult] = await main.query(query, [idUser])
        return QueryResult
    }

   static updateStatus = async function (idUser, newStatus) {
        let main = await connection()
        let query = 'UPDATE t_users SET Status = ? WHERE id = ?'
        let [QueryResult] = await main.query(query, [newStatus, idUser])
        return QueryResult
    }

   static updatePassword = async function (idUser, newPassword) {
        let main = await connection()
        let query = 'UPDATE t_users SET Password = ? WHERE id = ?'
        let [QueryResult] = await main.query(query, [newPassword, idUser])
        return QueryResult
    }

   static updateAvatar = async function (idUser, newAvatar) {
        let main = await connection()
        let query = 'UPDATE t_users SET Avatar = ? WHERE id = ?'
        let [QueryResult] = await main.query(query, [newAvatar, idUser])
        return QueryResult
    }

   static findByEmail = async function (email) {
        let main = await connection()
        let query = 'Select * FROM t_users WHERE Email = ?'
        let [QueryResult] = await main.query(query, [email])
        return QueryResult
    }

    //recap
}