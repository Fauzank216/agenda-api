import { ClassModel } from "./class.model.js";
import { BadRequestError } from '../../utils/errors/badRequestError.js'
export class ClassService {
    static create = async function ({name, id_major, grade}) {
        let insertId = await ClassModel.create({name, id_major, grade})

        if (!insertId) {
            throw new BadRequestError('Terjadi kesalahan saat menambahkan data')
        }

        let result = await ClassModel.findAll({ id_class: insertId })
        return {
            success: true,
            message: "Berhasil Menambahkan data",
            data: result
        }
    }

    static update = async function (id_class, name, id_major, grade) {
        let affectedRow = await ClassModel.update(id_class, name, id_major, grade)

        if (affectedRow === 0) {
            return {
                success: true,
                message: "Tidak ada perubahan",
                data: []
            }
        }

        let result = await ClassModel.findAll({ id_class })
        return {
            success: true,
            message: "Berhasil Memperbarui Kelas",
            data: result
        }
    }

    static delete = async function (id_class) {
        let affectedRow = await ClassModel.delete(id)

        if (affectedRow === 0) {
            return {
                success: true,
                message: "Tidak ada data yang dihapus",
                data: []
            }
        }

        return {
            success: true,
            message: "Kelas Berhasil dihapus",
            data: null
        }
    }

    static findAll = async function ({criteria}) {
        let result = await ClassModel.findAll(criteria)
        return {
            success: true,
            message: "Berhasil Mendapat Semua kelas",
            data: result
        }
    }
}