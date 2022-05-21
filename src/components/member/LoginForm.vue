<template>
  <div class="loginform">
    <div class="loginbox">
      <div class="logintitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="nolog">{{ noLogin }}</div>
      <div class="login">
        <label for="id" class="inputid inputtext" :class="{ ip: ipid }">
          <input
            type="text"
            id="id"
            name="id"
            v-model="user.id"
            :class="{ ipf: ipid }"
          />
        </label>
        <label
          for="pwd"
          class="inputpassword inputtext"
          :class="{ ip: ippassword }"
        >
          <input
            type="password"
            id="pwd"
            name="pwd"
            v-model="user.pwd"
            :class="{ ipf: ippassword }"
            @keyup.enter="loginMethod"
          />
        </label>
        <button @click="loginMethod">로그인</button>
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
    ipid() {
      return this.user.id ? true : false;
    },
    ippassword() {
      return this.user.pwd ? true : false;
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
        this.error = "잘못된 아이디 혹은 비밀번호입니다.";
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
.nolog {
  color: rgb(237, 83, 83);
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
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
  width: 100%;
}
button {
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 20px;
  background-color: #996a54;
  color: white;
  font-weight: bold;
}

.inputid::before {
  content: "아이디";
}

.inputpassword::before {
  content: "비밀번호";
}
.inputtext::before {
  font-size: 16px;
  margin: 10px 15px;
  height: 40px;
  position: absolute;
  padding: 6px 0;
  color: #a7a7a7;
  transition: 0.1s;
}

.ip::before {
  font-size: 10px;
  padding: 1px 0;
}
.ipf {
  padding: 14px 0 2px 15px !important;
}
</style>
