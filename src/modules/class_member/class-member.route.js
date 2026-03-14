import { ClassMemberController } from "./class-member.controller.js";
import express from 'express'

export const classMemberRouter = express.Router()

classMemberRouter.post('/', ClassMemberController.create)

classMemberRouter.put('/:id_class_member', ClassMemberController.update)

classMemberRouter.delete('/:id_class_member', ClassMemberController.delete)

classMemberRouter.get('/:id_class_member', ClassMemberController.findById)

classMemberRouter.get('/', ClassMemberController.findAll)