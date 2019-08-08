import mongoose from "mongoose"

// Define collection name
const collectionName = "user"

// Define collection schema
const UsersSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	createdAt: { type: Date, default: Date.now },
	updateddAt: { type: Date, default: Date.now },
})


UsersSchema.statics.findAll = (params) => {
	return this.default.find({
	  	username: params.username,
	})
}

// UsersSchema.pre("save", )

// Export Model
export default mongoose.model(collectionName, UsersSchema, collectionName)