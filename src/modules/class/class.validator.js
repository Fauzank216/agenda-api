import { body } from "express-validator"
import { validateRequest } from "../../middlewares/validator.middleware.js"
//implement logic
const classValidator = [
    body("name")
    .notEmpty()
    .withMessage("Name Tidak Boleh Kosong"),

    body("Id_major")
    .notEmpty()
    .withMessage("Major Tidak Boleh kosong"),

    validateRequest
]