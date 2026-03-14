import { runQuery } from '../../utils/tryCatch.wrapper.js'
import { filterWrapper } from '../../utils/query.wrapper.js'
export class ClassModel {

    //query untuk mengambil header/meta data
    static #META_DATA_BASE_QUERY =
        `SELECT t_class.id, t_class.grade, t_majors.name as major, t_class.name 
         FROM t_class
         INNER JOIN t_majors ON t_majors.id = t_class.id_major`

    //allowed keys untuk filter meta data    
    static #META_DATA_FILTER_MAP = { 'id_major': 't_majors.id = ?', 'grade': 't_class.grade = ?' }

    //query untuk mengambil statistik class
    static #STATS_BASE_QUERY =
        `
    SELECT COUNT(t_class_members.id) as total_students FROM t_class
    INNER JOIN t_class_members ON t_class_members.id_class = t_class.id
    INNER JOIN t_students ON t_students.id = t_class_members.id_student
    `
    //allowed keys untuk filter statistik
    static #STATS_FILTER_MAP = {
        'status': 't_students.status = ?',
        'id_class': 't_class_members.id_class = ? ',
        'id_major': 't_class.id_major = ?',
        'gender': 't_students.gender = ?',
        'semester': 't_class_members.id_semester = ?' //belum bener
    }

    static create = async function ({ name, id_major, grade }) {
        const query = 'INSERT INTO t_class(name, id_major, grade) VALUES(?, ?, ?)'
        let result = await runQuery(query, [name, id_major, grade])
        return result.insertId
    }

    static update = async function ({ id_class, name, id_major, grade }) {
        const query = 'UPDATE t_class SET name = ?, id_major = ?, grade = ? WHERE id = ?'
        let result = await runQuery(query, [name, id_major, grade, id_class])
        return result.affectedRows
    }

    static findAll = async function (criteria) {
        let result = await filterWrapper(ClassModel.#META_DATA_BASE_QUERY, ClassModel.#META_DATA_FILTER_MAP, criteria)
        return result
    }

    static delete = async function (id_class) {
        const query = 'DELETE FROM t_class WHERE id = ?'
        let result = await runQuery(query, [id_class])
        return result.affectedRows
    }

    static findById = async function (id_class) {
        const query = `${ClassModel.#META_DATA_BASE_QUERY} WHERE t_class.id = ?`
        let result = await runQuery(query, [id_class])
        return result[0]
    }

    static findAllStats = async function (criteria) {
        let result = await filterWrapper(ClassModel.#STATS_BASE_QUERY, ClassModel.#STATS_FILTER_MAP, criteria)
        return result
    }

    static findStatsById = async function (id_class) {
        let result = await filterWrapper(ClassModel.#STATS_BASE_QUERY, ClassModel.#STATS_FILTER_MAP, { id_class })
        return result
    }
}