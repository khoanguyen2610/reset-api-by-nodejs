import UsersModel from "../../models/UsersModel"
import ExceptionConfig from "../../configs/ExceptionConfig"
import HashPassword from "../../utils/HashPassword"
import Jwt from "../../utils/auth/Jwt"

class AuthController {
    login (req, res, next) {
        const user = {
            "email": req.body.email,
            "password": req.body.password
        }

        try {
            // const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1NjcxNTQ4NTIsImV4cCI6MTU2NzE1NTc1Mn0.tESiC2D319_9CbuIDfBZpUIjdb7iNZBh35W0ZaoLBX8"
            // const token = Jwt.verifyToken(myToken)
            const token = Jwt.getToken(user);
            const refresh_token = Jwt.getRefreshToken(user);
            req.session.user = user
            return res.jsonSuccess({
                message: ExceptionConfig.COMMON.REQUEST_SUCCESS,
                data : {
                    token: token,
                    refreshToken: refresh_token
                }
            })
        } catch (err) {
            next(err)
        }
    }

    refreshToken (req, res, next) {
        const user = {
            "email": req.body.email,
            "password": req.body.password
        }

        try {
            
            return res.jsonSuccess({
                message: ExceptionConfig.COMMON.REQUEST_SUCCESS,
                // data: { token, refresh_token}
                data : token
            })
        } catch (err) {
            next(err)
        }
    }
}

export default new AuthController()