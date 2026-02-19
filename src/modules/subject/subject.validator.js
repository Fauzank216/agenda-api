import {body} from 'express-validator'
import {validateRequest} from '../../middlewares/validator.middleware.js'
export const subjectValidator = [
    body('subjectName')
    .isEmpty()
    .withMessage('Name subject tidak boleh kosong'),

    body('category')
    .isEmpty()
    .withMessage('Category tidak boleh kosong'),

    validateRequest
]