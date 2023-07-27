const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
  },
});

const TestUser = mongoose.model("TestUser", userSchema);

module.exports = TestUser;
