import { UserModel } from "./user.model.js"
import { UserService } from "./user.service.js"
import { tryCatchWrapper } from "../../utils/tryCatch.wrapper.js"
export class UserController {

    static create = tryCatchWrapper(async (req, res, next) => {
        let newUser = await UserService.create(req.body)
        return res.status(200).json(newUser)
    })

    static findAll = tryCatchWrapper(async function (req, res, next) {
        let result = await UserService.findAll()
        return res.status(200).json(result)
    })

    static update = tryCatchWrapper(async function (req, res, next) {
        let userId = req.params.userId
        let { newName, newUsername, newEmail } = req.body
        let result = await UserService.update({userId, newName, newUsername, newEmail})
        return res.status(200).json(result)
    })

    static delete = tryCatchWrapper(async function (req, res, next) {
        let userId = req.params.userId
        let deletedUser = await UserService.delete(userId)
        return res.status(200).json(deletedUser)
    })

    static updateStatus = tryCatchWrapper(async function (req, res, next) {
        let userId = req.params.userId
        let { newStatus } = req.body
        let updatedStatus = await UserService.updateStatus({userId, newStatus})
        return res.status(200).json(updatedStatus)
    })

    static updatePassword = tryCatchWrapper(async function (req, res, next) {
        let userId = req.params.userId
        let { newPassword } = req.body
        let updatedPassword = await UserService.updatePassword({userId, newPassword})
        return res.status(200).json(updatedPassword)
    })

    static updateAvatar = tryCatchWrapper(async function (req, res, next) {
        let userId = req.params.userId
        let { newAvatar } = req.body
        let updatedAvatar = await UserService.updateAvatar({userId, newAvatar})
        return res.status(200).json(updatedAvatar)
    })

    static findByName = tryCatchWrapper(async function (req, res, next) {
        let name = req.query.name
        let user = await UserService.findByName(name)
        return res.status(200).json(user)
    })

    static findById = tryCatchWrapper(async function (req, res, next) {
        let userId = req.params.userId
        let user = await UserService.findById(userId)
        return res.status(200).json(user)
    })
}