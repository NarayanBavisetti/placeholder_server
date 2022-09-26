const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  loginType: {
    type: String,
    uppercase: true,
    required: true,
  },
  personType: {
    type: String,
    uppercase: true,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
