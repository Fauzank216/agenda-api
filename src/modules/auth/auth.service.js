import { UnauthorizedError } from "../../utils/errors/unauthorizedError.js"
import { UserModel } from "../user/user.model.js"

const userModel = new UserModel()

export class AuthService {
    login = async (email, password) => {
          let findUser = await userModel.findByEmail(email)

          if(!findUser){
              throw new UnauthorizedError("Email Atau Password Salah.")
          }

          if(findUser[0].Password != password){
            throw new UnauthorizedError("Email Atau Password Salah.")
          }

          return findUser
    }
}