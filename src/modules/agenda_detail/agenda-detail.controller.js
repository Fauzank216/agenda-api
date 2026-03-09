import { AgendaDetailService } from "./agenda-detail.service.js";
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'
export class AgendaDetailController {
    static findAll = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.findAll(req.query)
        return res.status(200).json(result)

    })
    
    static update = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.update(req.params.id_agenda_details, req.body)
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

    static findByAgendaId = tryCatchWrapper(async function(req, res) {
        let result = await AgendaDetailService.findById(req.params.id_agenda)
        return res.status(200).json(result)
    })
}