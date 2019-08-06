import mongoose from "mongoose"

// Define collection name
const collectionName = "user"

// Define collection schema
const UsersSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	createdAt: { type: Date, default: Date.now },
	updateddAt: { type: Date, default: Date.now },
});

// Export Model
export default mongoose.model('UsersModel', UsersSchema, collectionName);