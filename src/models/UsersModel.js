import mongoose from "mongoose"

import BaseModel, { BaseOptions } from "../cores/mongoose/BaseModel"

// Define collection name
const collectionName = "user"

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