import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Apt from '@/views/Apt.vue';
import Board from '@/views/Board.vue';
import InsertBoard from '@/components/InsertBoard.vue';
import SelectBoardByNo from '@/components/SelectBoardByNo.vue';

Vue.use(VueRouter);

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
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/qnaboard',
    name: 'Board',
    component: Board,
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
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
