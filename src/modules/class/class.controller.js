import { ClassService } from "./class.service.js"

export class ClassController {
    static create = async function(req, res, next) {
        let{name, majorId, level}=req.body
        try{
            let result = await ClassService.create(name, majorId, level)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
    
    static update = async function(req, res, next) {
           let classId = req.params.classId
           let{newName, newMajorId, newLevel}=req.body
        try{
            let result = await ClassService.update(classId, newName, newMajorId, newLevel)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }

    static delete = async function(req, res, next) {
        let classId = req.params.classId
        try{
            let result = await ClassService.delete(classId)
            return res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }
    static findAll = async function(req, res, next) {
        try{
            let result = await ClassService.findAll()
            return res.status(200).json(result)
        }catch(err){
            next(err)
        }
    }
    
}