import {createRouter , createWebHistory} from 'vue-router'
export const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      name:'home',
      path:'/home',
      component:()=>import('./pages/home.vue')
    },
    {
      path:'',
      redirect:'/home',
    },
    {
      name:'post',
      path:'/home/post/:id',
      component:()=>import('./pages/postPage.vue')
    },
    {
      name:'posts',
      path:'/home/post',
      component:()=>import('./pages/posts.vue')
    }
  ]
})