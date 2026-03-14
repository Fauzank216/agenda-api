import { SemesterModel } from "./semester.model.js";

export class SemesterService {
     static create = async function({academic_year, date_start, date_end, term, status}) {
         let insertId = await SemesterModel.create({academic_year, date_start, date_end, term, status})
         if(!insertId){
            return {
                success:true,
                message:'Gagal Menambahkan Data',
                data:[]
            }
         }
         let result = await SemesterModel.findById(insertId)
         return {
            success:true,
            message:'Berhasil Menambahkan Data',
            data:result
         }
     }

     static update = async function ({academic_year, date_start, date_end, term, status, id_semester}) {
        let affectedRows = await SemesterModel.update(id, {...req.body})
        if(affectedRows === 0){
            return {
                success:true,
                message:'Gagal Memperbarui Data',
                data:[]
            }
        }

        let result = await SemesterModel.findById(id_semester)
        return {
            success:true,
            message:'Berhasil Memperbarui Data',
            data:result
        }
     }

     static delete = async function(id_semester) {
        let affectedRows = await SemesterModel.delete(id_semester)
        if(affectedRows === 0){
            return {
                success:true,
                message:'Gagal Menghapus Data',
                data:[]
            }
        }
        return {
            success:true,
            message:'Berhasil Menghapus Data',
            data:null
        }
     }
}