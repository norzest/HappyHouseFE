<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/img/main_bg2.jpg"
      width="100%"
      height="800px"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
