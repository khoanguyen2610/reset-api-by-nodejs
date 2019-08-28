import UsersModel from "../../models/UsersModel"

class UsersController {
    async index (req, res, next) {
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
            const user = new UsersModel({
                username: "Test API - " + Math.round(Math.random()*100),
                password: "Test password",
            })
            await user.save()
            return res.jsonSuccess({
                message: "You requested index users controller",
                data: user
            })
        } catch (err) {
            next(err)
        }
    }

    async delete (req, res, next){
        const id = req.params.id
        try {
            const user = await UsersModel.softDelete(id)
            return res.jsonSuccess({
                message: "You requested delete users controller",
                data: id
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