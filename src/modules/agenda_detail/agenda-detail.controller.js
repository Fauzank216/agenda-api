import { AgendaDetailModel } from "./agenda-detail.model";
import { AgendaDetailService } from "./agenda-detail.service.js";
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'
export class AgendaDetailController {
    static create = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.create(req.body)
        return res.status(201).json(result)
    })

    static findAll = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.findAll()
        return res.status(200).json(result)

    })

    static updateStatus = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.updateStatus({status:req.body.status, id_agenda_details:req.params.id_agenda_details})
        return res.status(201).json(result)

    })
    
    static updateNote = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.update({note:req.body.note, id_agenda_details:req.params.id_agenda_details})
        return res.status(201).json(result)

    })

    static delete = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.delete(req.params.id_agenda_details)
        return res.status(201).json(result)
        
    })

    static findById = tryCatchWrapper(async function(req, res) {
        let result = await AgendaDetailService.findById(req.params.id_agenda_details)
        return res.status(200).json(result)
    })
}