<template>
  <div class="home">
    <div class="main">
      <div class="ment">
        <p>당신의 집을</p>
        <p>찾아드립니다.</p>
      </div>
      <search-bar class="search"></search-bar>
    </div>
    <div class="board">
      <rolling-message boardType="anno"></rolling-message>
      <rolling-message boardType="free"></rolling-message>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from "@/components/FooterNav.vue";
import SearchBar from "@/components/home/SearchBar.vue";
import RollingMessage from "@/components/home/RollingMessage.vue";
export default {
  name: "HomeView",
  components: {
    FooterNav,
    SearchBar,
    RollingMessage,
  },
};
</script>
<style scoped>
.home {
  z-index: 1;
}
.main {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/img/main_title.jpg");
  background-size: 100% 100%;
  position: relative;
}
.main::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: #fff;
  opacity: 0.3;
}
.ment {
  width: 80%;
  margin: 80px 0 40px;
  z-index: 1;
}
.main p {
  font-size: 40px;
  font-weight: bold;
  margin: 20px 10px;
  color: white;
}
.search {
  z-index: 1;
}
.board {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
