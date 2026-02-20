import { AgendaModel } from "./agenda.model.js";

export class AgendaService {
    static create = async function(idSchedule, note) {
         let result = await AgendaModel.create(idSchedule, note)
         return {
             success:true,
             message:'Berhasil menambahkan agenda',
            data:result
         }
    }
    static findAll = async function() {
         let result = await AgendaModel.findAll()
         return {
             success:true,
             message:'Berhasil mendapatkan semua agenda',
            data:result
         }
    }
    static update = async function(note, idAgenda) {
         let result = await AgendaModel.updateNote(note, idAgenda)
         return {
             success:true,
             message:'Berhasil menambahkan agenda',
             data:result
         }
    }
    static delete = async function(idAgenda) {
         let result = await AgendaModel.delete(idAgenda)
         return {
             success:true,
             message:'Berhasil menghapus agenda',
             data:result
         }
    }
}