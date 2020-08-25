const { resolve } = require("path")

const express = require("express");

const commentsService = require("./service/Comments.service");

const app = express();
app.use(express.static(resolve(__dirname, "views")))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let comService = new commentsService()

app.post('/add', function(req, res, next) {

  let { content } = req.body
  if (content.trim()) {
    comService.addComment(content).then(v => {
      res.json({ ok: 1, msg: "添加成功" })
    }, e => {
      console.log("error", e);
      res.json({ ok: 0, msg: e })
    })
  }
})

app.get("/list/:pageIndex/:pageSize", async (req, res) => {
  try {
    let { pageIndex, pageSize } = req.params;
    let result = await comService.findCommentsList({ pageIndex: pageIndex / 1, pageSize: pageSize / 1 })
    console.log();
    res.send({ ok: 1, data: result, msg: "成功" })
  } catch (e) {
    res.send({ok:0,msg:e})
  }
})

app.listen(80, () => {
  console.log("服务启动成功,请访问:http://127.0.0.1")
  console.log(resolve(__dirname, "views"));

})