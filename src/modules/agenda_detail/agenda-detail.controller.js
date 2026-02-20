import { AgendaDetailModel } from "./agenda-detail.model";
import { AgendaDetailService } from "./agenda-detail.service.js";

export class AgendaDetailController {
    static create = async function (req, res, next) {
        let { idAgenda, idClassMember, statusAttendance, note = "" } = req.body
        try {
            let result = await AgendaDetailService.create(idAgenda, idClassMember, statusAttendance, note = "")
            return res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }
    static findAll = async function (req, res, next) {
        try {
            let result = await AgendaDetailService.findAll()
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    static update = async function (req, res, next) {
        let { idAgenda, idClassMember, statusAttendance, note = "" } = req.body
        let idAgendaDetail = req.params.idAgendaDetail
        try {
            let result = await AgendaDetailModel.update(idAgenda, idClassMember, statusAttendance, note, idAgendaDetail)
            return res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }
    static delete = async function (req, res, next) {
        let idAgendaDetail = req.params.idAgendaDetail
        try {
            let result = await AgendaDetailService.delete(idAgendaDetail)
            return res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }
}