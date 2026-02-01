import { UnauthorizedError } from "../../utils/errors/unauthorizedError.js"
import { UserModel } from "../user/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthService {
  login = async (email, password) => {
    let findUser = await UserModel.findByEmail(email)

    if (!findUser || findUser.length === 0) {
      throw new UnauthorizedError("Email Atau Password Salah.")
    }

    const userData = findUser[0]
    console.log("Dari Auth Serive : ")
    console.log(userData)
    const encryptedPassword = userData.Password

    let isMatch = await bcrypt.compare(password, encryptedPassword)

    if (!isMatch) {
      throw new UnauthorizedError("Email Atau Password Salah.")
    }

    let { Name, Username, Email, Avatar, role } = userData

    let token = jwt.sign({ Email, role }, process.env.JWT_SECRET)

    return {
      success:true,
      message:"Login Berhasil",
      token,
      data:{
        id:userData.Id,
        name:userData.Name,
        username:userData.Username,
        email:userData.Email,
        avatar:userData.Avatar
      }
    }
  }
}