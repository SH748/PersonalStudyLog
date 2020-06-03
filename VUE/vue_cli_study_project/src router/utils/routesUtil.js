const routeList = []
export default {
  route: {
    get () {
      return routeList
    },
    /**
     * @param {Array||Object} routeArray 路由规则数组
     * 向路由规则数组中添加路由规则
     */
    set (routes) {
      if (Array.isArray(routes)) {
        let result = routes.every(item => {
          if (item['path'] && item['component']) {
            return true
          }
          return false
        })
        if (result) {
          routeList.concat(routes)
          return true
        }
      } else if (routes instanceof Object) {
        if (routes['path'] && routes['component']) {
          routeList.push(routes)
          return true
        }
      } else {
        throw new Error('routes illegal')
      }
    }
  }
}
