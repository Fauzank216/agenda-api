import { validateRequest } from "../../middlewares/validator.middleware.js"
import { body } from "express-validator"
export const userValidator = [

    body("name")
        .isEmpty()
        .withMessage("Nama Tidak Boleh Kosong"),

    body("username")
        .isEmpty()
        .withMessage("Username Tidak Boleh Kosong")
        .isLength({ max: 50 })
        .withMessage("Username Maksimal 50 karakter"),

    body("email")
        .isEmpty()
        .withMessage("Email Tidak Boleh Kosong")
        .isEmail()
        .withMessage("Email Tidak Valid"),

    body("password")
        .isEmpty()
        .withMessage("Password Tidak Boleh Kosong")
        .isLength({ min: 5 })
        .withMessage("Password Minimal 5 karakter"),

    validateRequest

]