import { SubjectModel } from "./subject.model.js";
import {BadRequestError} from "../../utils/errors/badRequestError.js"
export class SubjectService{
    static create = async function(subjectName, category) {
        let result = await SubjectModel.create(subjectName, category)
        return {
            success:true,
            message:'Berhasil menambahkan subject',
            data:result
        }
    }

    static findAll = async function() {
        let result = await SubjectModel.findAll()
        return{
            success:true,
            message:'Berhasil Mendapat Semua Subjects',
            data:result
        }
    }

    static update = async function(subjectName, category, idSubject) {
         let isSubjectEsist = await SubjectModel.findById(idSubject)

         if(!isSubjectEsist){
            throw new BadRequestError('Terjadi kesalahan saat memperbarui subject')
         }

         let result = await SubjectModel.update(subjectName, category, idSubject)

         return {
             success:true,
             message:'Berhasil Memperbarui Subject',
             data:result
         }
    }

    static delete = async function(idSubject) {
         let isSubjectEsist = await SubjectModel.findById(idSubject)

         if(!isSubjectEsist){
            throw new BadRequestError('Terjadi kesalahan saat menghapus subject')
         }

         await SubjectModel.delete(idSubject)

         return {
             success:true,
             message:'Berhasil Memperbarui Subject',
             data:null
         }
    }

    
}