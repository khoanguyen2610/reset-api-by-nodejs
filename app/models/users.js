const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model('Users', usersSchema);
