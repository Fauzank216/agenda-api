import { BadRequestError } from "../../utils/errors/badRequestError.js"
import { UserModel } from "./user.model.js"
import bcrypt from 'bcrypt'
export class UserService {
    static create = async function (name, username, email, password) {

        let isEmailUsed = await UserModel.findByEmail(email)
        console.log(`Dari user service :`)
        console.log(isEmailUsed)
        if (isEmailUsed.length != 0) {
            throw new BadRequestError("Email Sudah Terdaftar")
        }

        let hashedPassword = await bcrypt.hash(password, 10)

        let newUser = await UserModel.create(name, username, email, hashedPassword)

        return {
            success: true,
            message: "Guru Berhasil Ditambahkan",
            data: {
                id: newUser.insertId,
                name,
                username,
                email
            }
        }
    }

    static findAll = async function () {
        let users = await UserModel.findAll()
        return {
            success: true,
            message: "Berhasil Mendapatkan Semua Guru",
            data: users
        }
    }

    static update = async function (userId, newName, newUsername, newEmail) {
        let [user] = await UserModel.findByEmail(newEmail)
        console.log("Dari user service : ")
        console.log(user)
        if (user.Id != userId) {
            throw new BadRequestError("Email Sudah Digunakan")
        }

        await UserModel.update(userId, newName, newUsername, newEmail, user.Password)

        return {
            success: true,
            message: "Profile Berhasil diperbarui",
            data: {
                id: userId,
                name: newName,
                username: newUsername,
                email: newEmail
            }
        }

    }

    static delete = async function (userId) {
        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("Id yang dimasukan salah")
        }

        await UserModel.delete(userId)

        return {
            success: true,
            message: "User Berhasil dihapus",
            data: null

        }
    }

    static updateStatus = async function (userId, newStatus) {
        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("Id yang dimasukan salah")
        }

        await UserModel.updateStatus(userId, newStatus)

        return {
            success: true,
            message: "Berhasil Memperbarui Status",
            data: { status: newStatus }
        }
    }

    static updatePassword = async function (userId, newPassword) {
        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("Id yang dimasukan salah")
        }

        let hashedPassword = await bcrypt.hash(newPassword, 10)

        await UserModel.updatePassword(userId, hashedPassword)

        return {
            success: true,
            message: "Berhasil Memperbarui Password",
            data: null
        }
    }

    static updateAvatar = async function (userId, newAvatar) {

        let user = await UserModel.findById(userId)

        if (!user) {
            throw new BadRequestError("Id yang dimasukan salah")
        }

        await UserModel.updateAvatar(userId, newAvatar)

        return {
            success: true,
            message: "Berhasil Memperbarui Avatar",
            data: { avatar: newAvatar }
        }

    }

    static findByEmail = async function (email) {
        let user = await UserModel.findByEmail(email)

        if (!user) {
            throw new BadRequestError("Email yang dimasukan salah")
        }

        return {
            success: true,
            message: "User Berhasil ditemukan",
            data: user
        }
    }
}