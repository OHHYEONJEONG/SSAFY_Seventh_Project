import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Apt from "@/views/Apt.vue";
import SelectBoard from "@/views/Board.vue";
import InsertBoard from "@/components/InsertBoard.vue";
import SelectBoardByNo from "@/components/SelectBoardByNo.vue";
import UpdateBoard from "@/components/UpdateBoard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apt",
    name: "Apt",
    component: Apt
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/qnaboard",
    name: "SelectBoard",
    component: SelectBoard
  },
  {
    path: "/insert",
    name: "InsertBoard",
    component: InsertBoard
  },
  {
    path: "/detail/:no",
    name: "SelectBoardByNo",
    component: SelectBoardByNo,
    props: true
  },
  {
    path: "/update/:no",
    name: "UpdateBoard",
    component: UpdateBoard,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
