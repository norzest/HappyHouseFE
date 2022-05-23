<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <img src="../assets/img/logo_happyhouse_white.png" alt="" />
      </router-link>
    </div>
    <div id="navbar">
      <router-link to="/map">아파트</router-link>
      <router-link to="/interestedloc">관심매물</router-link>
      <router-link to="/notice">게시판</router-link>
    </div>
    <div v-if="userInfo" id="member">
      <div class="profile" @click="tagOnOff">{{ userInfoName }}</div>
      <div class="tmpbox" :class="{ off: taginfo }" @click="tagOnOff"></div>
      <div class="tag" :class="{ off: taginfo }" @click="tagOnOff">
        <router-link to="/member/profile">내 정보</router-link>
        <div class="line"></div>
        <a href="javascript:void(0)" @click="logoutMethod">로그아웃</a>
      </div>
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
  data() {
    return {
      tag: true,
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
    userInfoName() {
      return this.userInfo.name.substr(
        this.userInfo.name.length - 2,
        this.userInfo.name.length,
      );
    },
    taginfo() {
      return this.tag;
    },
  },
  methods: {
    ...mapActions(memberStore, ["userLogout"]),
    logoutMethod() {
      this.userLogout();
      this.$router.push({ name: "home" });
    },
    tagOnOff() {
      this.tag = !this.tag;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  /* background-color: transparent; */
  background-color: #996a54;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
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
  width: 95px;
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
.profile {
  width: 46px;
  height: 46px;
  border-radius: 23px;
  font-size: 20px;
  background-color: #f8edd3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
}
.tag {
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 73px;
  right: 20px;
  background-color: #f3f2f0;
  border-radius: 5px;
  align-items: center;
  z-index: 10;
}
.tag a {
  display: block;
  color: black;
  margin: 5px;
}
.tag .line {
  content: "";
  width: 100%;
  height: 2px;
  background-color: lightgray;
  margin: 5px 0;
}
.tmpbox {
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
}
.off {
  display: none;
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
