const mongoose = require("mongoose")

const CommentsSchma = require("../schma/Comments.schma")

const comments = mongoose.model("comments",CommentsSchma)

module.exports = comments