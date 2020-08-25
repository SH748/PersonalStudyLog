const BASE_URL = "http://shhelloworld.utools.club"

export default function(url,data={},method="GET",header={}){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:BASE_URL+url,
				data,
				method,
				header,
				success(res){
					resolve(res.data)
				},
				fail(err){
					resolve(false)
				}
			})
		})
}