import { body } from "express-validator";
import {validateRequest} from '../../middlewares/validator.middleware.js'

export const validateAgendaDetail = [
    body('idAgenda')
    .isEmpty()
    .withMessage('idAgenda tidak boleh kosong'),

    body('idClassMember')
    .isEmpty()
    .withMessage('idClassMember tidak boleh kosong'),

    body('statusAttendance')
    .isEmpty()
    .withMessage('Status absen tidak boleh kosong'),

    validateRequest

]