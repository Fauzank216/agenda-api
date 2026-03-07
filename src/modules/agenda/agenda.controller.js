import { AgendaService } from './agenda.service.js'
import { tryCatchWrapper } from '../../utils/tryCatch.wrapper.js'
export class AgendaController {
    static create = tryCatchWrapper(async function (req, res, next) {
        let result = await AgendaService.create(req.body)
        return res.status(201).json(result)

    })
    static findAll = tryCatchWrapper(async function (req, res, next) {
        let result = await AgendaService.findAll(req.query)
        return res.status(200).json(result)
    })

    static findById = tryCatchWrapper(async function (req, res) {
        let result = await AgendaService.findById(req.params.id_agenda)
        return res.status(200).json(result)
    })

    static update = tryCatchWrapper(async function (req, res, next) {
        console.log(req.body.note )
        console.log(req.params.id_agenda )
        let result = await AgendaService.update({ id_agenda: req.params.id_agenda, note: req.body.note })
        return res.status(201).json(result)

    })

    static delete = tryCatchWrapper(async function (req, res, next) {
        let result = await AgendaService.delete(req.paramas.id_agenda)
        return res.status(201).json(result)

    })
}