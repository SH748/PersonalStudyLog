const dbutils = require("../DB/dbutils")

const CommentsModel = require("../model/Comments.model")

class commentsService{
  constructor(){
    this.db = new dbutils(CommentsModel)
  }
  async addComment(content){
    try{
      let count = await this.countComment(content)
      if(!count)
      {
        await this.db.insertOne({content,createTime:Date.now()})
        return  Promise.resolve("成功")
      }
      else{
        return  Promise.reject("请勿重复提交")
      }
    }catch(e){
      return  Promise.reject(e)
    }
  }


  async countComment(content){
    try{
      let sarch = content?{content}:null
      return await this.db.count(sarch)
    }catch(e){
      console.log(e);
      // throw new Error("网络连接错误")
    }
  }
  
  async findCommentsList({reason={},pageIndex=0,pageSize=0}){
    try{
      let result = await this.db.find({limit:pageSize,skip:(pageIndex-1)*pageSize,sort:{createTime:-1}})
      let count = await this.countComment()
      return {
        result,
        count,
        pageIndex,
        pageSize,
        countPage:parseInt(count/pageSize)+1
      }      
    }catch(e){
      throw new Error("网络连接错误")
      // console.log(e);
    }
  }
}

module.exports = commentsService