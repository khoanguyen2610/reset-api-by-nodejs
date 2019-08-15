import UsersModel from "../../models/UsersModel"
import { validationResult } from "express-validator"

class UsersController {
    async index (req, res, next) {
        // const errors = validationResult(req)
        // if (!errors.isEmpty()) {
        //     return res.jsonError({
        //         code: 400,
        //         message: "Bad Request",
        //         errors: errors.mapped()
        //     })
        // }

        try {
            const users = await UsersModel.findByFullName(/av8899/)
            return res.jsonSuccess({
                message: "You requested index users controller",
                data: users
            })
        } catch (err) {
            next(err)
        }
    }

    async save (req, res, next) {
        try {
            var user = new UsersModel({
                ocusername: "Test usern222amee",
                password: "Test password",

            });
            await user.save()

            return res.jsonSuccess({
                message: "You requested index users controller",
                data: user
            })
        } catch (err) {
            next(err)
        }
    }

    detail (req, res, next) {
        try {
            return res.jsonSuccess({
                message: "You requested detail users controller",
                errors: "You requested detail users controller"
            })
        } catch (err) {
            next(err)
        }
    }
}

export default new UsersController()