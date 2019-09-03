import jwt from "jsonwebtoken"

import JwtConfig from "../../configs/JwtConfig"

class Jwt {
    constructor() {
    }

    getToken(payload) {
        console.log(JwtConfig)
        const options = {
            expiresIn: JwtConfig.TOKEN_LIFE
        }
        return jwt.sign(payload || {}, JwtConfig.TOKEN_SECRET_KEY, options);
    }

    getRefreshToken(payload ) {
        const options = {
            expiresIn: JwtConfig.REFRESH_TOKEN_LIFE
        }
        return jwt.sign(payload || {}, JwtConfig.REFRESH_TOKEN_SECRET_KEY, options);
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, JwtConfig.TOKEN_SECRET_KEY)
        } catch {
            return false
        }
    }

    verifyRefreshToken(token) {
        try {
            return jwt.verify(token, JwtConfig.REFRESH_TOKEN_SECRET_KEY)
        } catch (err) {
            return false
        }
    }
}

export default new Jwt()