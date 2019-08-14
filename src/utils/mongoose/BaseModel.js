/*
|--------------------------------------------------------------------------
| Base Model Class
| Define base method
|--------------------------------------------------------------------------
*/
import mongoose from "mongoose"

const BaseOptions = {
    status: {type: String, lowercase: true, trim: true, enum: ["active", "inactive", "delete"], default: "active"},
    createdAt: { type: Date, default: Date.now },
	updateddAt: { type: Date, default: Date.now },
}

class BaseModel {
    static findById() {

    }

    static findByFullName(username) {
        return this.find({ username: username })
    }
}

export default BaseModel
export {
    BaseOptions
}
