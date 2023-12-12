import { createRouter, createWebHashHistory } from 'vue-router'

import LoginPage from '@/components/Auth/LoginPage.vue'
import UserCreate from '@/components/Auth/UserCreate.vue'
import UserEdit from '@/components/Auth/UserEdit.vue'
import AccueilSuper from '@/components/Auth/AccueilSuper.vue'
import AccueilAdmin from '@/components/Auth/AccueilAdmin.vue'
import AccueilPage from '@/components/Auth/AccueilPage.vue'
import UserAbsences from '@/components/Auth/UserAbsences.vue'
import MessageAdmin from '@/components/Auth/MessageAdmin.vue'




const routes = [
  {
    path: '/accueilPage',
    name: 'accueilPage',
    component: AccueilPage,
    // meta: { auth: true } 
  },
  {
    path: '/accueil',
    name: 'accueilPage',
    component: AccueilPage,
    // meta: { auth: true } 
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage,
    meta: { auth: false } 
  },

  {
    path: '/accueilSuper',
    name: 'accueilSuper',
    component: AccueilSuper,
    meta: { auth: true } 
  },
  {
    path: '/',
    name: 'accueilAdmin',
    component: AccueilAdmin,
    meta: { auth: true } 
  },
  {
    path: '/user/Create',
    name: 'userCreate',
    component: UserCreate
  },
  {
    // path: '/Super/:id/edit',
    path:'/user/Edit',
    name: 'userEdit',
    component: UserEdit
  },
  {
    // path: '/Super/:id/edit',
    path:'/UserAbsences',
    name: 'UserAbsences',
    component: UserAbsences
  },
  {
    // path: '/Super/:id/edit',
    path:'/MessageAdmin',
    name: 'MessageAdmin',
    component: MessageAdmin
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



export default router;
