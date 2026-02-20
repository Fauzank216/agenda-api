import { AgendaDetailModel } from "./agenda-detail.model.js";

export class AgendaDetailService {
    static create = async function(idAgenda, idClassMember, statusAttendance, note = "") {
        let result = await AgendaDetailModel.create(idAgenda, idClassMember, statusAttendance, note)
        return {
            success:true,
            message:'Agenda detail berhasil dibuat',
            data:result
        }
    }
    static findAll = async function() {
        let result = await AgendaDetailModel.findAll()
        return {
            success:true,
            message:'Berhasil mendapatkan semua agenda detail',
            data:result
        }
    }
    static update = async function(idAgenda, idClassMember, statusAttendance, note = "") {
        let result = await AgendaDetailModel.update(idAgenda, idClassMember, statusAttendance, note)
        return {
            success:true,
            message:'Agenda detail berhasil diperbarui',
            data:result
        }
    }
    static delete = async function(idAgendaDetail) {
        let result = await AgendaDetailModel.delete(idAgendaDetail)
        return {
            success:true,
            message:'Agenda detail berhasil dibuat',
            data:result
        }
    }
}