import { ClassModel } from "./class.model.js";
export class ClassService {
    static create = async function (name, majorId, level) {
        let result = await ClassModel.create(name, majorId, level)
        return {
            success: true,
            message: "Berhasil Menambahkan Kelas",
            data: {
                id: result.insertId,
                name,
                majorId,
                level
            }
        }
    }

    static update = async function (classId, newName, newMajorId, newLevel) {
        let result = await ClassModel.update(classId, newName, newMajorId, newLevel)
        return {
            success: true,
            message: "Berhasil Memperbarui Kelas",
            data: {
                id: result.insertId,
                name: newName,
                majorId: newMajorId,
                level: newLevel
            }
        }
    }

    static delete = async function (classId) {
        await ClassModel.delete(classId)
        return {
            success: true,
            message: "Kelas Berhasil dihapus",
            data: null
        }
    }

    static findAll = async function () {
        let result = await ClassModel.findAll()
        return {
            success: true,
            message: "Berhasil Mendapat Semua kelas",
            data: result
        }
    }
}