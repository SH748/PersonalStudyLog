const mongoose = require("mongoose")

const CommentsSchma = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  createTime:{
    type:Date,
    default:Date.now()
  },
  upNum:{
    type:Number,
    default:0
  },
  downNum:{
    type:Number,
    default:0
  }
})

module.exports  = CommentsSchma