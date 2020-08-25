const DBBase = require("./base")

class DBUtils {
  constructor(model) {
    this.db = new DBBase("mongodb://127.0.0.1", "27017", "weibo", {
      useNewUrlParser: true,
      useUnifiedTopology: true
      
    })
    this.model = model
  }
  insertOne(obj){
    try{
      this.db.connect()
      this.model.create(obj)
    }catch(e){
      throw e
    }
  }
  async count(obj){
    try{
      this.db.connect()
      return await this.model.countDocuments(obj)
    }catch(e){
      throw e
    }
  }
  async find({reason={},limit=0,skip=0,group={},sort={}}){
    try{
      this.db.connect()
      return await this.model.find(reason).limit(limit).skip(skip).sort(sort)
    }catch(e){
      throw e
    }
  }
  async update(doc={},options={},callback=()=>{}){
    try{
      this.db.connect()
      return await this.model.update(doc,options,callback)
    }catch(e){
      throw e
    }
  }
}
module.exports = DBUtils