<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
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
</style>
