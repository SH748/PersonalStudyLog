const mongoose = require("mongoose");
const userModel = require("./model/user.model");

(async function() {
  try {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/study", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log()
    console.log("********************************************************************")
    console.log('                         connect success                            ');
    console.log("********************************************************************")

    userModel.create({
      name: "张三",
      age: 16,
      sex: 1,
      hobbies: ["唱", "跳", "rap"]
    }, (err) => {
      if (!err)
      console.log("********************************************************************")
      console.log('                         connect success                            ');
      console.log("********************************************************************")
    })
  } catch (e) {
    console.log()
    console.log("********************************************************************")
    console.log('                         connect error                              ');
    console.log("********************************************************************")
  }
})()