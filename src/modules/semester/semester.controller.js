import { tryCatchWrapper } from "../../utils/tryCatch.wrapper.js";
import { SemesterService } from "./semester.service.js";

export class SemesterController {
    static create = tryCatchWrapper(async function(req, res) {
        let result = await SemesterService.create(req.body)
        return res.status(201).json(result)
    })

    static update = tryCatchWrapper(async function(req, res) {
        let result = await SemesterService.update({...req.body, id_semester:req.params.id_semester})
        return res.status(201).json(result)
    })

    static  delete = tryCatchWrapper( async function(req, res) {
        let result = await SemesterService.delete(req.params.id_semester)
        return res.status(201).json(result)
    })

    static findById = tryCatchWrapper(async function(req, res) {
        let result = await SemesterService.findById(req.params.id_semester)
        return res.status(200).json(result)
    })

    static findAll = tryCatchWrapper(async function(req, res) {
        let result  = await SemesterService.findAll()
        return res.status(200).json(result)
    })
}