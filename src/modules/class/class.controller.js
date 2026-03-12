import { tryCatchWrapper } from "../../utils/tryCatch.wrapper.js"
import { ClassService } from "./class.service.js"

export class ClassController {
    static create = tryCatchWrapper(async function (req, res, next) {
        let result = await ClassService.create(req.body)
        return res.status(201).json(result)
    })

    static update = tryCatchWrapper(async function (req, res, next) {
        let result = await ClassService.update({ id_class: req.params.id_class, ...req.body })
        return res.status(201).json(result)
    })

    static delete = tryCatchWrapper(async function (req, res, next) {
        let result = await ClassService.delete(req.params.id_class)
        return res.status(201).json(result)
    })

    static findAll = tryCatchWrapper(async function (req, res, next) {
        let result = await ClassService.findAll({...req.query})
        return res.status(200).json(result)
    })
}