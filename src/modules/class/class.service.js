import { ClassModel } from "./class.model.js";
import { BadRequestError } from '../../utils/errors/badRequestError.js'
import { SemesterService } from '../semester/semester.service.js'
export class ClassService {
    static create = async function ({ name, id_major, grade }) {
        let insertId = await ClassModel.create({ name, id_major, grade })

        if (!insertId) {
            return {
                success: true,
                message: 'Gagal Menambahkan Data',
                data: []
            }
        }

        let raw = await ClassModel.findById(insertId)
        return {
            success: true,
            message: "Berhasil Menambahkan Data",
            data: { id: raw.id, class: `${raw.grade} ${raw.major} ${raw.name}`, major: raw.major }
        }
    }

    static update = async function ({ id_class, name, id_major, grade }) {
        let affectedRow = await ClassModel.update({ id_class, name, id_major, grade })

        if (affectedRow === 0) {
            return {
                success: true,
                message: "Gagal Memperbarui Data",
                data: []
            }
        }

        let raw = await ClassModel.findById(id_class)
        return {
            success: true,
            message: "Berhasil Memperbarui Data",
            data: { id: raw.id, class: `${raw.grade} ${raw.major} ${raw.name}`, major: raw.major }
        }
    }

    static delete = async function (id_class) {
        let affectedRow = await ClassModel.delete(id_class)

        if (affectedRow === 0) {
            return {
                success: true,
                message: "Gagal Menghapus Data",
                data: []
            }
        }

        return {
            success: true,
            message: "Berhasil Menghapus Data",
            data: null
        }
    }

    static findAll = async function (criteria) {
        let raws = await ClassModel.findAll(criteria)

        let result = raws.map(raw => {
            return {
                id: raw.id,
                class: `${raw.grade} ${raw.major} ${raw.name}`,
                major: raw.major
            }
        })

        return {
            success: true,
            message: "Berhasil Mendapat Data",
            data: result
        }
    }

    static findById = async function (id_class) {
        let raw = await ClassModel.findById(id_class)

        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: { id: raw.id, class: `${raw.grade} ${raw.major} ${raw.name}`, major: raw.major }
        }
    }

    //statistik secara keseluruhan
    static findAllStats = async function (criteria) {
        let result = { stats: stats_body }
        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: result
        }
    }

    //statistik berdasarkan class spesifik
    static findStatsById = async function (criteria) {
        let semester_active = await SemesterService.findAll({ status: 'active' })
        let stats_header = await ClassModel.findById({ id_class: criteria.id_class, semester: semester_active })
        let result = { ...stats_header, stats: stats_body }
        return {
            success: true,
            message: 'Berhasil Mendapat Data',
            data: result
        }
    }
}