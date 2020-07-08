/* 导入路由组件 */
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


export default [
    {
        path:'/',
        // redirect:'/Home'
        component:Home
    },
    {
        path:'/Home',
        component:Home,
        name:'Home',
        meta:{
            isShowSort:true
        }
    },
    {
        path:'/Login',
        component:Login,
        name:'Login',
        meta:{
            isHiddenFooter:true,
        }
    },
    {
        path:'/Register',
        component:Register,
        name:'Register',
        meta:{
            isHiddenFooter:true
        }
    },
    {
        path:'/Search/:keyword?',
        component:Search,
        name:'search'
    },
]