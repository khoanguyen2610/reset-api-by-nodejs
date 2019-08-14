import mongoose from "mongoose"

import BaseModel, { BaseOptions } from "../utils/mongoose/BaseModel"

// Define collection name
const collectionName = "usersss"

// Define collection schema
const UsersSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	...BaseOptions
})
// Load BaseModel
UsersSchema.loadClass(BaseModel)




UsersSchema.statics.findAll = (username) => {
	return this.default.find({
	  	username: username,
	})
}

// Export Model
export default mongoose.model(collectionName, UsersSchema, collectionName)