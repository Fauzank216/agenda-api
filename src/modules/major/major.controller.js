import { MajorModel } from "./major.model.js"
import { MajorService } from "./major.service.js"
export class MajorController {
    static create = async function (req, res, next) {
        let { name, fullName } = req.body
        try {
            const result = await MajorService.create(name, fullName)
            return res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    static findAll = async function (req, res, next) {
        try {
            const result = await MajorService.findAll()
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static findByName = async function (req, res, next) {
        let name = req.query.value
        console.log(name)
        try {
            const result = await MajorService.findByName(name)
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static findById = async function (req, res, next) {
        let majorId = req.params.majorId
        try {
            const result = await MajorService.findById(majorId)
            return res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static update = async function (req, res, next) {
        let majorId = req.params.majorId
        let { newName, newFullName } = req.body
        try {
            let result = await MajorService.update(majorId, newName, newFullName)
            return res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    static delete = async function (req, res, next) {
        let majorId = req.params.majorId
        try {
            let result = await MajorModel.delete(majorId)
            return res.status(201).json({
                success:true,
                message:"Berhasil Menghapus Major",
                data:null
            })
        } catch (err) {
            next(err)
        }
    }
}