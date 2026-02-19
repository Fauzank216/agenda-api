import { body } from 'express-validator'
import { validateRequest } from '../../middlewares/validator.middleware.js'
export const scheduleValidator = [
    body('idUser')
    .isEmpty()
    .withMessage('idUser tidak boleh kosong'),

    body('idClass')
    .isEmpty()
    .withMessage('idClass tidak boleh kosong'),

    body('idSubject')
    .isEmpty()
    .withMessage('idSubject tidak boleh kosong'),

    body('idSemester')
    .isEmpty()
    .withMessage('idSemester tidak boleh kosong'),

    body('day')
    .isEmpty()
    .withMessage('day tidak boleh kosong'),

    body('timeStart')
    .isEmpty()
    .withMessage('timeStart tidak boleh kosong')
    .isTime()
    .withMessage('Format waktu tidak sesuai'),

    body('timeEnd')
    .isEmpty()
    .withMessage('timeEnd tidak boleh kosong')
    .isTime()
    .withMessage('Format waktu tidak sesuai'),

    validateRequest
    
]