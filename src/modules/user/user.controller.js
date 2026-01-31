import { UserModel } from "./user.model.js"
import { UserService } from "./user.service.js"
export class UserController {
    static create = async function (req, res, next) {
        let { name, username, email, password } = req.body
        try {
            let newUser = await UserService.create(name, username, email, password)
            return res.status(200).json(newUser)
        } catch (err) {
            next(err)
        }
    }

    static findAll = async function (req, res, next) {
        try {
            let users = await UserService.findAll()
            return res.status(200).json(users)
        } catch (err) {
            next(err)
        }
    }

    static update = async function (req, res, next) {
        let userId = req.params.userId
        let { newName, newUsername, newEmail } = req.body
        try {
            let updatedUser = await UserService.update(userId, newName, newUsername, newEmail)
            return res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    }
    static delete = async function (req, res, next) {
        let userId = req.params.userId
        try {
            let deletedUser = await UserService.delete(userId)
            return res.status(200).json(deletedUser)
        } catch (err) {
            next(err)
        }
    }

    static updateStatus = async function (req, res, next) {
        let userId = req.params.userId
        let { newStatus } = req.body
        try {
            let updatedStatus = await UserService.updateStatus(userId, newStatus)
            return res.status(200).json(updatedStatus)
        } catch (err) {
            next(err)
        }
    }
    static updatePassword = async function (req, res, next) {
        let userId = req.params.userId
        let { newPassword } = req.body
        try {
            let updatedPassword = await UserService.updatePassword(userId, newPassword)
            return res.status(200).json(updatedPassword)
        } catch (err) {
            next(err)
        }
    }

    static updateAvatar = async function (req, res, next) {
        let userId = req.params.userId
        let { newAvatar } = req.body
        try {
            let updatedAvatar = await UserService.updateAvatar(userId, newAvatar)
            return res.status(200).json(updatedAvatar)
        } catch (err) {
            next(err)
        }
    }
    static findByEmail = async function (req, res, next) {
        let email = req.query
        try {
            let user = await UserModel.findByEmail(email)
            return res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
}