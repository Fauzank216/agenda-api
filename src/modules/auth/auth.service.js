import { UnauthorizedError } from "../../utils/errors/unauthorizedError.js"
import { UserModel } from "../user/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthService {
  login = async (email, password) => {
    let findUser = await UserModel.findByEmail(email)

    if (!findUser) {
      throw new UnauthorizedError("Email Atau Password Salah.")
    }

    let encryptedPassword = findUser[0].password

    let isMatch = bcrypt.compare(password, encryptedPassword)

    if (!isMatch) {
      throw new UnauthorizedError("Email Atau Password Salah.")
    }

    let { Name, Username, Email, role } = findUser[0]

    let token = jwt.sign({ email, role }, 'SECRET_KEY02')

    return [
      {
        jwt: token,
        user: { Name, Username, Email }
      }
    ]
  }
}