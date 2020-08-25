const mongoose = require("mongoose")
const userSchma = require("../schma/user.schma")
const userModel = mongoose.model("user",userSchma)
module.exports = userModel