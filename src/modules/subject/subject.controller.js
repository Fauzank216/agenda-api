import { SubjectService } from "./subject.service.js";

export class SubjectController {
    static create = async function (req, res, next) {
        let { subjectName, category } = req.body
        try {
            let result = await SubjectService.create(subjectName, category)
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }
    static findAll = async function (req, res, next) {
        try {
            let result = await SubjectService.findAll()
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    static update = async function (req, res, next) {
        let { subjectName, category } = req.body
        let idSubject = req.params.idSubject
        try {
            let result = await SubjectService.update(subjectName, category, idSubject)
        } catch (err) {
            next(err)
        }
    }
    static delete = async function (req, res, next) {
        let idSubject = req.params.idSubject
        try {
            let result = await SubjectService.delete(idSubject)
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }
} 