const mongoose = require("mongoose")

class DBBase{
  constructor(baseURL="mongodb://127.0.0.1",port="27017",dbName,config={}){
    this.baseURL = baseURL;
    this.port = port;
    this.dbName = dbName;
    this.config = config;
  }
  connect(){
    mongoose.connect(`${this.baseURL}:${this.port}/${this.dbName}`,this.config)
  }
}

module.exports = DBBase