import { ClassMemberModel } from "./class-member.model.js";

export class ClassMemberService {
    static create = async function ({ id_class, id_student }) {
        let insertId = await ClassMemberModel.create({ id_class, id_student })
        if (!insertId) {
            return {
                success: true,
                message: 'Gagal Menambahkan Data',
                data: []
            }
        }
        let result = await ClassMemberModel.findById(insertId)
        return {
            success: true,
            message: 'Berhasil Menambahkan Data',
            data: result
        }
    }

    static findAll = async function () {
        let result = await ClassMemberModel.findAll()
        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: result
        }
    }

    static update = async function ({ id_class, id_student, id_class_member }) {
        let affectedRows = await ClassMemberModel.update({ id_class, id_student, id_class_member })
        if (affectedRows === 0) {
            return {
                success: true,
                message: 'Gagal Memperbarui Data',
                data: []
            }
        }

        let result = await ClassMemberModel.findById(id_class_member)
        return {
            success: true,
            message: 'Berhasil Memperbarui Data',
            data: result
        }
    }

    static delete = async function (id_class_member) {
        let affectedRows = await ClassMemberModel.delete(id_class_member)
        if (affectedRows === 0) {
            return {
                success: true,
                message: 'Gagal Menghapus Data',
                data: []
            }
        }

        return {
            success: true,
            message: 'Berhasil Menghapus Data',
            data: null
        }
    }

    static findById = async function (id_class_member) {
        let result = await ClassMemberModel.findById(id_class_member)
        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: result
        }
    }
}