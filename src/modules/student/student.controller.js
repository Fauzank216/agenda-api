import { StudentService } from "./student.service.js";
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'
export class StudentController {
    static create = tryCatchWrapper(async function (req, res) {
        let result = await StudentService.create(req.body)
        return res.status(200).json(result)
    })

    static findAll = tryCatchWrapper(async function (req, res) {
        let result = await StudentService.findAll(req.query)
        return res.status(200).json(result)
    })

    static update = tryCatchWrapper(async function (req, res) {
        let result = await StudentService.update({ ...req.body, id_student: req.params.id_student })
        return res.status(200).json(result)
    })

    static delete = tryCatchWrapper(async function (req, res) {
        let result = await StudentService.delete(req.params.id_student)
        return res.status(200).json(result)

    })

    static findById = tryCatchWrapper(async function (req, res) {
        let result = await StudentService.delete(req.params.id_student)
        return res.status(200).json(result)
    })

    static findStats = tryCatchWrapper(async function(req, res) {
        let result = await StudentService.findStats(req.params.id_student)
        return res.status(200).json(result)
    })
}