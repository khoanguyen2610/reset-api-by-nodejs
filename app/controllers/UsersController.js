import UsersModel from "../models/UsersModel"

class UsersController {
    index = async (req, res, next) => {
        const users = await UsersModel.find().limit(100)
        res.status(200).json({
            success: true,
            message: "You requested index users controller",
            data: users
        })
    }

    detail =  (req, res, next) => {
        res.status(200).json({
            success: true,
            message: "You requested detail users controller"
        })
    }
}

export default new UsersController()