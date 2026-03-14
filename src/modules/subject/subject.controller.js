import { tryCatchWrapper } from "../../utils/tryCatch.wrapper.js";
import { SubjectService } from "./subject.service.js";

export class SubjectController {
    static create = tryCatchWrapper(async function (req, res, next) {
        let result = await SubjectService.create(req.body)
        return res.status(201).json(result)
    })

    static findAll = tryCatchWrapper(async function (req, res, next) {
        let result = await SubjectService.findAll()
        return res.status(200).json(result)

    })

    static update = tryCatchWrapper(async function (req, res, next) {
        let result = await SubjectService.update({ ...req.body, id_subject: req.params.id_subject })
        return res.status(201).json(result)
    })

    static delete = tryCatchWrapper(async function (req, res, next) {
        let result = await SubjectService.delete(req.params.id_subject)
        return res.status(201).json(result)

    })

    static findbyId = tryCatchWrapper(async function (req, res, next) {
        let result = await SubjectService.findById(req.params.id_subject)
        return res.status(200).json(result)

    })
} 