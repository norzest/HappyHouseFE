<template>
  <div class="member">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberView",
};
</script>

<style scoped>
.member::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: url("../assets/img/main_bg3.jpg");
  background-size: 100% 100%;
  opacity: 0.5;
  z-index: -10;
}
</style>
