import mongoose from "mongoose"
import Joi from "@hapi/joi"
const Joigoose = require('joigoose')(mongoose);


// Define collection name
const collectionName = "user"

// Define collection schema
const UsersSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	createdAt: { type: Date, default: Date.now },
	updateddAt: { type: Date, default: Date.now },
});

// let UsersSchema = Joi.object({
// 	username: Joi.string().required(),
// 	password: Joi.string().required()
// });


// UsersSchema = new mongoose.Schema(Joigoose.convert(UsersSchema))




UsersSchema.statics.findAll = (params) => {
	return this.default.find({
	  	username: params.username,
	})
}

// UsersSchema.pre("save", )

// Export Model
export default mongoose.model(collectionName, UsersSchema, collectionName);