import bcrypt from "bcrypt"

class HashPassword {
    constructor() {
        this.saltPassword = bcrypt.genSaltSync(10)
    }

    hash(password) {
        return bcrypt.hashSync(password, this.saltPassword)
    }

    compareHash(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
}

export default new HashPassword()