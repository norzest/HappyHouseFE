<template>
  <div class="loginform">
    <div>
      <label for="id">아이디</label>
      <input type="text" id="id" name="id" v-model="user.id" /><br />
      <label for="pwd">비밀번호</label>
      <input type="password" id="pwd" name="pwd" v-model="user.pwd" /><br />
      <button @click="loginMethod">로그인</button>
      <p>{{ noLogin }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        id: "",
        pwd: "",
      },
      error: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError"]),
    noLogin() {
      return this.error;
    },
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async loginMethod() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
        await this.getUserInfo(token);
        this.$router.push({ name: "home" });
      } else {
        this.error = "잘못된 아이디, 비밀번호입니다.";
      }
    },
  },
};
</script>

<style>
.loginform {
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
