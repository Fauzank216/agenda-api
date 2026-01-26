import { UnauthorizedError } from "../../utils/errors/unauthorizedError.js"
import { AuthService } from "./auth.service.js"
const authService = new AuthService()
export class AuthController {
    constructor() { }
    login = async (req, res, next) => {
        const { email, password } = req.body
        try {

            const request = await authService.login(email, password)

            return res.status(200).json({
                success: true,
                message: 'Login berhasil',
                data: request
            })

        } catch (err) {
            next(err)
        }

    }
}