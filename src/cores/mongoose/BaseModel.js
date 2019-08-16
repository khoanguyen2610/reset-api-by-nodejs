/*
|--------------------------------------------------------------------------
| Base Model Class
| Define base method
|--------------------------------------------------------------------------
*/
import mongoose from "mongoose"

// Exteneral fields
const BaseOptions = {
    status: { type: String, lowercase: true, trim: true, enum: ["active", "inactive", "delete"], default: "active" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
	updateddAt: { type: Date, default: Date.now },
}


// Based function
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
