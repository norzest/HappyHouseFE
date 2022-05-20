<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <img src="../assets/img/logo_happyhouse_white.png" alt="" />
      </router-link>
    </div>
    <div id="navbar">
      <router-link to="/about">아파트</router-link>
      <router-link to="/about">관심매물</router-link>
      <router-link to="/board">자유게시판</router-link>
    </div>
    <div v-if="userInfo" id="member">
      <router-link to="/member/profile">profile</router-link>
      <button @click="logoutMethod">logout</button>
    </div>
    <div v-else id="guest">
      <router-link :to="{ name: 'login' }">login</router-link>
      <router-link to="/member/join">join</router-link>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
export default {
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userLogout"]),
    logoutMethod() {
      this.userLogout();
      this.$router.push("/");
    },
  },
};
</script>

<style scope>
header {
  width: 100%;
  /* background-color: transparent; */
  background-color: #996a54;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  position: fixed;
  top: 0;
}

header a {
  color: white;
}

header a {
  font-weight: 600;
}

header #logo,
header #guest,
header #member {
  padding: 0 20px;
}
#logo img {
  width: 100px;
}

#navbar {
  flex-grow: 1;
  padding: 0 10px;
  text-align: left;
}
#navbar a {
  display: inline-block;
  padding: 0 10px;
}
#guest a {
  display: inline-block;
  padding: 0 10px;
}
#member a {
  display: inline-block;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  header {
    background-color: #996a54;
  }
  #navbar,
  #guest,
  #member {
    display: none;
  }
}
</style>
