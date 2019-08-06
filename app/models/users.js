import mongoose from "mongoose"
const Schema = mongoose.Schema

const usersSchema = new Schema({
	username: { type: String, unique: true },
	password: String,
});

export default mongoose.model('Users', usersSchema);
