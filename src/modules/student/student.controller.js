import { StudentService } from "./student.service.js";

export class StudentController {
    static create = async function (req, res, next) {
        let { nisn, nama, gender, phoneParent } = req.body
        try {
            let result = await StudentService.create(nisn, nama, gender, phoneParent)
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static findAll = async function (req, res, next) {
        try {
            let result = await StudentService.findAll()
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }

    }

    static update = async function (req, res, next) {
        let { nisn, nama, gender, phoneParent } = req.body
        try {
            let result = await StudentService.update(nisn, nama, gender, phoneParent)
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static delete = async function (req, res, next) {
        let idStudent = req.params.idStudent
        try {
            let result = await StudentService.delete(idStudent)
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static findById = async function (req, res, next) {
        let idStudent = req.params.idStudent
        try {
            let result = await StudentService.delete(idStudent)
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}