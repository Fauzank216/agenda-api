import { tryCatchWrapper } from "../../utils/tryCatch.wrapper.js";
import { ClassMemberService } from "./class-member.service.js";

export class ClassMemberController {
    static create = tryCatchWrapper(async function (req, res) {
        let result = await ClassMemberService.create(req.body)
        return res.status(201).json(result)
    })

    static update = tryCatchWrapper(async function (req, res) {
        let result = await ClassMemberService.update({ ...req.body, id_class_member: req.params.id_class_member })
        return res.status(201).json(result)
    })

    static delete = tryCatchWrapper(async function (req, res) {
        let result = await ClassMemberService.delete(req.params.id_class_member)
        return res.status(201).json(result)
    }
    )
    static findById = tryCatchWrapper(async function (req, res) {
        let result = await ClassMemberService.findById(req.params.id_class_member)
        return res.status(200).json(result)
    })

    static findAll = tryCatchWrapper(async function (req, res) {
        let result = await ClassMemberService.findAll()
        return res.status(200).json(result)
    })
}