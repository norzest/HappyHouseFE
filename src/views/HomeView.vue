<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/img/main_bg2.jpg"
      width="100%"
      height="800px"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer-nav></footer-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FooterNav from "@/components/FooterNav.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    FooterNav,
  },
};
</script>
