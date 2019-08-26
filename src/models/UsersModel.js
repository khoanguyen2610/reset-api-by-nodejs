import mongoose from "mongoose"

import BaseModel, { BaseSchema } from "../cores/mongoose/BaseModel"

// Define collection name
const collectionName = "userTest";

// Define collection schema
const UsersSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	email: { type: String },
	fullname: { type: String },
	password: String
});
//--- index
// username - unqiue  			1
// { username & email } unqiue 	2
// fullname 					3
// UsersSchema.index({username: 1} && {username: 1, email: 1} && {fullname: 1}, {unique: true});
UsersSchema.index({username: 1}, {unique: true});
UsersSchema.index({username: 1, email: 1}, {unique: true});
UsersSchema.index({fullname: 1});

// Load BaseModel
UsersSchema.loadClass(BaseModel);
UsersSchema.plugin(BaseSchema);


UsersSchema.statics.findAll = (username) => {
	return this.default.find({
	  	username: username,
	})
};

// Export Model
export default mongoose.model(collectionName, UsersSchema, collectionName)