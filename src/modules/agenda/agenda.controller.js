import {AgendaService} from './agenda.service.js'

export class AgendaController {
    static create = async function(req, res, next) {
        let {idSchedule, note} = req.body
        try{
            let result = await AgendaService.create(idSchedule, note)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
    static findAll = async function(req, res, next) {
        try{
            let result = await AgendaService.findAll(idSchedule, note)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
    static update = async function(req, res, next) {
        let {note} = req.body
        let idAgenda = req.params.idAgenda
        try{
            let result = await AgendaService.update(note, idAgenda)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
    static delete = async function(req, res, next) {
      let idAgenda = req.paramas.idAgenda
        try{
            let result = await AgendaService.delete(idAgenda)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
}