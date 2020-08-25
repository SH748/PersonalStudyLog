const  mongoose =  require("mongoose")
const userScham=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    age:Number,
    sex:{
      type:Number,
      default:1
    },
    hobbies:[String],
    createTime:{
      type:Date,
      default:Date.now()
    }
  }
);
module.exports = userScham