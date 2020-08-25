(() => {
  axios.interceptors.response.use(function({ data }) {
    return data
  })
  // Vue.$axios = axios;
  new Vue({
    el: "#app",
    data: {
      content: "",
      addResult: false,
      showResult: false,
      ResultMsg: "",
      commentsList:[],
      pageIndex:0,
      countPage:0
    },
    mounted(){
      // console.log(111);
      this.getList()
    },
    filters:{
      dateFormat(value){
        const date = new Date(value);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      }
    },
    methods: {
      async addWeibo() {
        if (this.content.trim()) {
          let result = await axios.post("/add", { content: this.content })
          if (result.ok === 1) {
            this.content = ""
            this.showResult = true
            this.addResult = true
            this.ResultMsg = result.msg
            setTimeout(() => {
              this.showResult = false
            }, 3000);
          } else {
            this.showResult = true
            this.addResult = false
            this.ResultMsg = result.msg
            setTimeout(() => {
              this.showResult = false
            }, 3000);
          }
          console.log(result);
        }
      },
      
      async getList(pageIndex=1,pageSize=5){
        let result =  await axios.get(`/list/${pageIndex}/${pageSize}`)
        this.commentsList = result.data.result
        this.pageIndex = result.data.pageIndex
        this.countPage = result.data.countPage
      },
      del(){

      },
      upordown(){

      }
    }
  })
})()