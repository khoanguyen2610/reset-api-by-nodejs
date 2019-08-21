import UsersModel from "../../models/UsersModel"

class UsersController {
    async index (req, res, next) {
        try {
            const users = await UsersModel.findByFullName("Test usern222amee")
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
            const user = new UsersModel({
                username: "Test API",
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

    async detail (req, res, next) {
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