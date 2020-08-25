const koa = require("koa")
const router = require("koa-router")()

const app = new koa();

app
	.use(router.routes())
	.use(router.allowedMethods())

const indexData = require("./data/index.json")
router.get("/getIndexData",(ctx,next)=>{
	ctx.body=indexData
})

router.get("/getIndexClassification",(ctx,next)=>{
	ctx.body={
		code:200,
		data:indexData.kingKongModule
	}
})

const indexCateListData = require('./data/indexCateList.json');
router.get('/getIndexCateList',async (ctx,next)=>{
	// console.log(indexData)
	// console.log(111)
	await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve()
		},2000)
	})
	ctx.body={
		code:200,
		data:indexCateListData
	};
})

const categoryDatas = require("./data/categoryDatas.json")
router.get("/getcatelist",(ctx,next)=>{
	ctx.body={
		code:200,
		data:categoryDatas
	}
})


app.listen(80,()=>{
	console.log("success")
})
