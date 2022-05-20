import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

// // https://router.vuejs.org/kr/guide/advanced/navigation-guards.html
// const onlyAuthUser = async (to, from, next) => {
//   // console.log(store);
//   const checkUserInfo = store.getters["memberStore/checkUserInfo"];
//   const getUserInfo = store._actions["memberStore/getUserInfo"];
//   let token = sessionStorage.getItem("access-token");
//   if (checkUserInfo == null && token) {
//     await getUserInfo(token);
//   }
//   if (checkUserInfo === null) {
//     alert("로그인이 필요한 페이지입니다..");
//     next({ name: "signIn" });
//     // router.push({ name: "signIn" });
//   } else {
//     // console.log("로그인 했다.");
//     next();
//   }
// };

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/member",
    name: "member",
    component: () => import("@/views/MemberView.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/member/LoginForm.vue"),
      },
      {
        path: "join",
        name: "join",
        component: () => import("@/components/member/JoinForm.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/components/member/MemberProfile.vue"),
      },
      {
        path: "modify",
        name: "memberModify",
        component: () => import("@/components/member/MemberProfileModify.vue"),
      },
      {
        path: "delete",
        name: "memberDelete",
        component: () => import("@/components/member/MemberDelete.vue"),
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/views/BoardView.vue"),
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardList",
        component: () => import("@/components/board/BoardList.vue"),
      },
      {
        path: "detail/:id",
        name: "boardDetail",
        component: () => import("@/components/board/BoardDetail.vue"),
      },
      {
        path: "modify/:id",
        name: "boardModify",
        component: () => import("@/components/board/BoardModify.vue"),
      },
      {
        path: "regist",
        name: "boardRegister",
        component: () => import("@/components/board/BoardRegister.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
