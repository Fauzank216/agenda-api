import { MajorModel } from "./major.model.js"
export class MajorService {
    static create = async function (name, fullName) {
        await MajorModel.create(name, fullName)
        return {
            success: true,
            message: "Berhasil Menambahkan Jurusan",
            data: {
                name,
                fullName
            }
        }
    }

    static update = async function (majorId, newName, newFullName) {
        await MajorModel.update(majorId, newName, newFullName)
        return {
            success: true,
            message: "Berhasil Memperbarui Jurusan",
            data: {
                id: majorId,
                name: newName,
                fullName: newFullName
            }
        }
    }

    static delete = async function(majorId) {
        await MajorModel.delete(majorId)
        return{
            success:true,
            message:"Berhasil Menghapus Jurusan",
            data:null
        }
    }

    static findAll = async function() {
        let majors = await MajorModel.findAll()
        return{
            succes:true,
            message:"Berhasil Mendapatkan Semua Jurusan",
            data:majors
        }
    }

    static findByName = async function(name) {
        let major = await MajorModel.findByName(name)
        return{
            success:true,
            message:"Berhasil Mendapatkan Semua Jurusan",
            data:major
        }
    }

    static findById = async function(majorId) {
        let major = await MajorModel.findById(majorId)
        return {
            succes:true,
            message:"Berhasil Mendapatkan Semua Major",
            data:major
        }
    }
}