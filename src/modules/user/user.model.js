import { connection } from "../../../config/db/config.db.js"

export class UserModel {
    findByEmail = async function (email) {
        let main = await connection()
        let query = 'Select * FROM t_users'
        let [QueryResult] = await main.query(query)
        return QueryResult
    }
}