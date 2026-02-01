import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validator.middleware.js";

export const majorValidator = [
     body('id')
     .notEmpty()
     .withMessage("Id tidak boleh kosong"),

     body('name')
     .notEmpty()
     .withMessage("Nama tidak boleh kosong")
     .isLength({max:15})
     .withMessage("Nama jurusan maksimal 15 karakter"),

    body('full_name')
    .isLength({max:100})
    .withMessage("Maksimal 100 karakter"),

    validateRequest
]