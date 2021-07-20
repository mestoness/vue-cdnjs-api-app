import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./view/Home.vue";
import Libraries from "./view/libraiesPage.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { name: "library", path: "/libraries/:name", component: Libraries },
    { path: "*", redirect: "/" },
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
