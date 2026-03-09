import { AgendaService } from './agenda.service.js'
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'
import { AgendaDetailService } from '../agenda_detail/agenda-detail.service.js'
export class AgendaController {
    static create = tryCatchWrapper(async function (req, res, next) {
        let { agendas, details } = req.body
        let result = await AgendaService.create(agendas, details)
        return res.status(201).json(result)

    })
    static findAll = tryCatchWrapper(async function (req, res, next) {
        let result = await AgendaService.findAll(req.query)
        return res.status(200).json(result)
    })

    static findDetailById = tryCatchWrapper(async function (req, res) {
        let result = await AgendaDetailService.findByAgendaId(req.params.id_agenda)
        return res.status(200).json(result)
    })

    static findById = tryCatchWrapper(async function (req, res) {
        let result = await AgendaService.findById(req.params.id_agenda)
        return res.status(200).json(result)
    })

    static updateNote = tryCatchWrapper(async function (req, res, next) {
        console.log(req.body.note)
        console.log(req.params.id_agenda)
        let result = await AgendaService.updateNote({ id_agenda: req.params.id_agenda, note: req.body.note })
        return res.status(201).json(result)

    })

    static delete = tryCatchWrapper(async function (req, res, next) {
        let result = await AgendaService.delete(req.paramas.id_agenda)
        return res.status(201).json(result)

    })
}