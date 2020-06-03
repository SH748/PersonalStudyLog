/**
 *  {
    path: '',
    name: '',
    component: ''
  }
 */
import home from '@/pages/anli/Home.vue'
import news from '@/pages/anli/News.vue'
import about from '@/pages/anli/about.vue'
import routerhead from '@/pages/head'

export default[
  {
    path: '/head', // 必须
    name: 'routerhead',
    component: routerhead // 必须
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: '/home/news',
        name: 'news',
        component: news
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]
