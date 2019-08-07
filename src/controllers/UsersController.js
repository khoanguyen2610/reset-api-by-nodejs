import UsersModel from "../models/UsersModel"

class UsersController {
    async index (req, res, next) {
        
        try {
            // await UsersModel({username: "api-test"}).save((err, result) => {
            // })
            // await UsersModel.joiValidate()
            const users = await UsersModel.find({username: /av8899/})
            res.jsonSuccess({
                message: "You requested index users controller",
                data: users
            })
        } catch (err) {
            next(err)
        }
    }

    detail (req, res, next) {
        try {
            res.jsonError({
                message: "You requested detail users controller",
                errors: "You requested detail users controller"
            })
        } catch (err) {
            next(err)
        }
    }
}

export default new UsersController()