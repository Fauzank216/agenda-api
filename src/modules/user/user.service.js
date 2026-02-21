import { BadRequestError } from "../../utils/errors/badRequestError.js"
import { UserModel } from "./user.model.js"
import bcrypt from 'bcrypt'
export class UserService {

    static #formattedData(row) {
        let formatted = []

        row.forEach(r => {
            formatted.push({ id: r.Id, name: r.Name, username: r.Username, email: r.Email, avatar: r.Avatar, status: r.Status })
        })

        return formatted
    }

    static create = async function ({ name, username, email, password }) {

        let isEmailUsed = await UserModel.findByEmail(email)

        if (isEmailUsed.length != 0) {
            throw new BadRequestError("Email Tidak Valid")
        }

        let hashedPassword = await bcrypt.hash(password, 10)

        let insertId = await UserModel.create({ name, username, email, hashedPassword })

        let result = await UserModel.findById(insertId)

        return {
            success: true,
            message: "Guru Berhasil Ditambahkan",
            data: UserService.#formattedData(result)[0]
        }
    }

    static findAll = async function () {
        let row = await UserModel.findAll()
        return {
            success: true,
            message: "Data Berhasil diambil",
            data: UserService.#formattedData(row)
        }
    }

    static update = async function ({ userId, newName, newUsername, newEmail }) {
        let [user] = await UserModel.findByEmail(newEmail)

        if (user.Id != userId) {
            throw new BadRequestError("Email Tidak Valid")
        }

        let insertId = await UserModel.update({ userId, newName, newUsername, newEmail, password: user.Password })

        let row = await UserModel.findById(insertId)

        return {
            success: true,
            message: "Profile Berhasil diperbarui",
            data: UserService.#formattedData(row)
        }

    }

    static delete = async function (userId) {
        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("User id Tidak Valid")
        }

        await UserModel.delete(userId)

        return {
            success: true,
            message: "Data berhasil dihapus",
            data: null

        }
    }

    static updateStatus = async function ({ userId, newStatus }) {
        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("User id Tidak Valid")
        }

        await UserModel.updateStatus({ userId, newStatus })

        return {
            success: true,
            message: "Berhasil Memperbarui Status",
            data: { status: newStatus }
        }
    }

    static updatePassword = async function ({userId, newPassword}) {
        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("User id Tidak valid")
        }

        let hashedPassword = await bcrypt.hash(newPassword, 10)

        await UserModel.updatePassword({ userId, hashedPassword })

        return {
            success: true,
            message: "Berhasil Memperbarui Password",
            data: null
        }
    }

    static updateAvatar = async function ({ userId, newAvatar }) {

        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("User id Tidak Valid")
        }

        await UserModel.updateAvatar({ userId, newAvatar })

        let result = await UserModel.findById(userId)
     
        return {
            success: true,
            message: "Berhasil Memperbarui Avatar",
            data: { avatar: result[0].Avatar }
        }

    }

    static findByEmail = async function (email) {
        let result = await UserModel.findByEmail(email)

        if (!result) {
            throw new BadRequestError("Email Tidak Valid")
        }

        return {
            success: true,
            message: "Data Berhasil ditemukan",
            data: UserService.#formattedData(result)
        }
    }

    static findById = async function (userId) {
        let result = await UserModel.findById(userId)

        if (!result) {
            throw new BadRequestError("User id Tidak Valid")
        }

        return {
            success: true,
            message: "Data Berhasil ditemukan",
            data: UserService.#formattedData(result)[0]
        }
    }

    static findByName = async function (Name) {
        let result = await UserModel.findByName(Name)

        if (!result) {
            throw new BadRequestError("User id Tidak Valid")
        }

        return {
            success: true,
            message: "Data Berhasil ditemukan",
            data: UserService.#formattedData(result)
        }
    }
}