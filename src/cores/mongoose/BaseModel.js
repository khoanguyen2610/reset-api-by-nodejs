/*
|--------------------------------------------------------------------------
| Base Model Class
| Define base method
|--------------------------------------------------------------------------
*/
import mongoose from "mongoose"
// import ModelUsers from "../../models/UsersModel"
// Exteneral fields
const BaseFields = {
    status: { type: String, lowercase: true, trim: true, enum: ["active", "inactive", "delete"], default: "active" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, default: null },
    createdAt: { type: Date, default: Date.now() },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
	updateddAt: { type: Date, default: Date.now() },
}


// BaseSchema process middleware
const BaseSchema = schema => {
    // Add Exteneral fields
    schema.add(BaseFields)

    // Create a pre-save hook
    schema.pre("save", function(next) {
        const now = Date.now()
        this.createdBy = mongoose.mongo.ObjectID() //Temp data
        this.createdAt = now
        if (!this.created_at) {
            this.updatedBy = mongoose.mongo.ObjectID() //Temp data
            this.updateddAt = now
        }
        next()
    })
}

// Based function
class BaseModel {
    // Update status => "delete"
    static softDelete(id) {
        return this.updateOne({_id: id}, {status: "delete"})
    }

    // Temp function
    static findByFullName(username) {
        return this.find({ username: username })
    }
}

export default BaseModel
export {
    BaseSchema,
    BaseFields
}