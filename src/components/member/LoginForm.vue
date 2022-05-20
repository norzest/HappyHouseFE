<template>
  <div class="loginform">
    <div class="loginbox">
      <div class="logintitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="login">
        <input
          type="text"
          id="id"
          name="id"
          v-model="user.id"
          placeholder="아이디"
        />

        <input
          type="password"
          id="pwd"
          name="pwd"
          v-model="user.pwd"
          placeholder="비밀번호"
        />
        <button @click="loginMethod">로그인</button>
        <p>{{ noLogin }}</p>
      </div>
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

<style scoped>
.loginform {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.loginbox {
  background-color: #f3f2f0;
  padding: 50px 70px 70px;
  border: 1px solid gray;
  border-radius: 5px;
}
.logintitle {
  text-align: center;
  margin-bottom: 30px;
}

.login {
  display: flex;
  flex-direction: column;
}
input {
  height: 40px;
  border-radius: 5px;
  margin: 5px 0;
  padding: 5px 15px;
  border: 1px solid gray;
}
button {
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 20px;
  background-color: #996a54;
  color: white;
  font-weight: bold;
  font-size: 16px;
}
</style>
