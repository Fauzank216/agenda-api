import { StudentModel } from "./student.model.js";
import { BadRequestError } from '../../utils/errors/badRequestError.js'
export class StudentService {
    static create = async function ({ nisn, nama, gender, phone_parent }) {
        let insertId = await StudentModel.create({ nisn, nama, gender, phone_parent })

        if (!insertId) {
            return {
                success: true,
                message: 'Gagal menambahkan Data',
                data: []
            }
        }

        let result = await StudentModel.findById(insertId)
        return {
            success: true,
            message: 'Berhasil Menambahkan Data',
            data: result
        }
    }

    static findAll = async function (criteria) {
        let result = await StudentModel.findAll(criteria)
        return {
            success: true,
            message: 'Berhasil Mendapatkan Data',
            data: result
        }
    }

    static update = async function ({ nisn, name, gender, phone_parent, id_student }) {
        let affectedRows = await StudentModel.update({ nisn, name, gender, phone_parent, id_student })
        if (affectedRows === 0) {
            return {
                success: true,
                message: 'Gagal memperbarui data',
                data: []
            }
        }

        let result = await StudentModel.findById(id_student)

        return {
            success: true,
            message: 'Berhasil Memperbarui data',
            data: result
        }
    }

    static delete = async function (id_student) {

        let affectedRows = await StudentModel.delete(id_student)

        if (affectedRows === 0) {
            return {
                success: true,
                message: 'Gagal Menghapus Data'
            }
        }

        return {
            success: true,
            message: 'Berhasil Menghapus data',
            data: null
        }
    }

    static findById = async function (id_student) {
        let result = await StudentModel.findById(id_student)
        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: result
        }
    }

    static findStats = async function (id_student) {
        let stats_header = await StudentModel.findMeetingStats()

        let stats_body = await StudentModel.findAbcentStats(id_student)

        let result = { ...stats_header, stats: stats_body }

        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: result
        }
    }
}