<template>
  <div class="home">
    <footer-nav></footer-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from "@/components/FooterNav.vue";
export default {
  name: "HomeView",
  components: {
    FooterNav,
  },
};
</script>
