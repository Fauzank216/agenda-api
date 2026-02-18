import { StudentModel } from "./student.model.js";
import {BadRequestError} from '../../utils/errors/badRequestError.js'
export class StudentService {
    static create = async function(nisn, nama, gender, phoneParent) {

       let isNisnExist = await StudentModel.findByNisn(nisn)

       if(isNisnExist){
          throw new BadRequestError("Terjadi kesalahan saat menambahkan siswa")
       }

       let result = await StudentModel.create(nisn, nama, gender, phoneParent)
       return {
           success:true,
           message:'Berhasil Menambahkan Siswa',
           data:result
       }
    }

    static findAll = async function() {
        let result = await StudentModel.findAll()
        return{
            success:true,
            message:'Berhasil Mendapat Semua siswa',
            data:result
        }
    }

    static update = async function(idStudent, nisn, nama, gender, phoneParent) {
        let isStudentExist = await StudentModel.findById(idStudent)

        if(!isStudentExist){
            throw new BadRequestError("Terjadi kesalahan saat melakukan update")
        }

        let result = await StudentModel.update(idStudent, nisn, nama, gender, phoneParent)

        return {
            success:true,
            message:'Berhasil Memperbarui data',
            data:result    
        }
    }

    static delete = async function(idStudent) {
        let isStudentExist = await StudentModel.findById(idStudent)

        if(!isStudentExist){
            throw new BadRequestError("Terjadi kesalahan saat melakukan penghapusan")
        }

        await StudentModel.delete(idStudent)

        return {
            success:true,
            message:'Berhasil Memperbarui data',
            data:null    
        }
    }

    static findById = async function(idStudent) {
        let result = await StudentModel.findById(idStudent)
        return{
            success:true,
            message:'Berhasil Mendapat Semua siswa',
            data:result
        }
    }

    
}