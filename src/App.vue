<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view id="main" />
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>
<style>
@import url("@/assets/css/reset.css");
body::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: url("./assets/img/main_bg3.jpg");
  background-size: 100% 100%;
  opacity: 0.5;
  z-index: -10;
}
body {
  background-color: #f3f2f0;
}
#main {
  margin-top: 90px;
}
</style>
