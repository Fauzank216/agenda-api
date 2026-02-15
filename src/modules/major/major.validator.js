import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validator.middleware.js";

export const createMajorValidator = [
    body('name')
        .notEmpty()
        .withMessage("Nama tidak boleh kosong")
        .isLength({ max: 15 })
        .withMessage("Nama jurusan maksimal 15 karakter"),

    body('fullName')
        .isLength({ max: 100 })
        .withMessage("Maksimal 100 karakter"),

    validateRequest
]

export const updateMajorValidator = [
    body('newName')
        .notEmpty()
        .withMessage("Nama tidak boleh kosong")
        .isLength({ max: 15 })
        .withMessage("Nama jurusan maksimal 15 karakter"),

    body('newFullName')
        .isLength({ max: 100 })
        .withMessage("Maksimal 100 karakter"),

    validateRequest
]