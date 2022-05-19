<template>
  <div class="loginform">
    <div>
      <label for="id">아이디</label>
      <input type="text" id="id" name="id" v-model="id" /><br />
      <label for="pwd">비밀번호</label>
      <input type="password" id="pwd" name="pwd" v-model="pwd" /><br />
      <button @click="loginMethod">로그인</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      pwd: "",
    };
  },
  methods: {
    loginMethod() {
      axios
        .get("http://localhost:8080/happyhouse/member/login", {
          params: {
            id: this.id,
            password: this.pwd,
          },
        })
        .then(({ data }) => {
          console.log(data);
        });
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
