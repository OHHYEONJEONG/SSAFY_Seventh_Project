import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Apt from '@/views/Apt.vue';
import SelectBoard from '@/views/Board.vue';
import Login from '@/views/Login.vue';
import Notice from '@/views/Notice.vue';
import Me from '@/views/Me.vue';
import store from '@/store';
import InsertBoard from '@/components/QnA/InsertBoard.vue';
import SelectBoardByNo from '@/components/QnA/SelectBoardByNo.vue';
import UpdateBoard from '@/components/QnA/UpdateBoard.vue';
import InsertNotice from '@/components/Notice/InsertNotice.vue';
import SelectNoticeByNo from '@/components/Notice/SelectNoticeByNo.vue';
import UpdateNotice from '@/components/Notice/UpdateNotice.vue';

Vue.use(VueRouter);
// https://router.vuejs.org/kr/guide/advanced/navigation-guards.html
const requireAuth = () => (to, from, next) => {
  const nextRoute = to.path;

  if (store.getters.getAccessToken) {
    return next();
  } else next('/login' + nextRoute);
};
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/apt',
    name: 'Apt',
    component: Apt,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    //로그인 시 로그인페이지에서 home 화면으로 이동
    beforeEnter(to, from, next) {
      if (store.getters.getAccessToken) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/login/:nextRoute',
    name: 'LoginNextRoute',
    component: Login,
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/insertNotice',
    name: 'InsertNotice',
    component: InsertNotice,
  },
  {
    path: '/detailNotice/:no',
    name: 'SelectNoticeByNo',
    component: SelectNoticeByNo,
    props: true,
  },
  {
    path: '/updateNotice/:no',
    name: 'UpdateNotice',
    component: UpdateNotice,
    props: true,
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
    beforeEnter: requireAuth(),
  },
  {
    path: '/qnaboard',
    name: 'SelectBoard',
    component: SelectBoard,
  },
  {
    path: '/insert',
    name: 'InsertBoard',
    component: InsertBoard,
  },
  {
    path: '/detail/:no',
    name: 'SelectBoardByNo',
    component: SelectBoardByNo,
    props: true,
  },
  {
    path: '/update/:no',
    name: 'UpdateBoard',
    component: UpdateBoard,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
