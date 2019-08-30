import UsersModel from "../../models/UsersModel"

class UsersController {
    async index (req, res, next) {
        try {
            const users = await UsersModel.findByFullName("Test usern222amee");
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
                username: req.body.username,
                password: "Test password",
            });
            await user.save();
            return res.jsonSuccess({
                message: "You requested index users controller",
                data: user
            })
        } catch (err) {
            next(err)
        }
    }

    async delete (req, res, next){
        const id = req.params.id;
        try {
            const user = await UsersModel.softDelete(id, res);
            return res.jsonSuccess({
                message: "You requested delete users controller",
                data: id
            })
        } catch (err) {
            next (err)
        }
    }

    async search (req, res, next) {
        // const username = req.params.name;
        try {
            const users = await UsersModel.findUserAndCount("Test API");
            return res.jsonSuccess({
                message: "Test Search user",
                data: users
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