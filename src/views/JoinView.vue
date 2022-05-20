<template>
  <div class="loginform">
    <div>
      <div>
        <label for="id">이름</label>
        <input type="text" id="name" name="name" v-model="member.name" />
      </div>
      <div>
        <label for="id">아이디</label>
        <input type="text" id="id" name="id" v-model="member.id" />
      </div>
      <div>
        <label for="pwd">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="member.password"
        />
        <p id="pwd_tf">비밀번호는 6자 이상 20자 이하로 입력해주세요.</p>
      </div>
      <div>
        <label for="pwdchk">비밀번호 확인</label>
        <input
          type="password"
          id="pwdchk"
          name="pwdchk"
          v-model="member.pwdchk"
        />
        <p id="pwd_check_tf"></p>
      </div>
      <div>
        <label for="phone" class="form-label">전화번호</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          name="phone"
          v-model="member.phone"
        />
      </div>
      <div>
        <label for="email" class="form-label">이메일</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="member.email"
        />
      </div>
      <div>
        <label for="address" class="form-label">주소</label>
        <input
          type="text"
          class="form-control"
          id="address"
          name="address"
          v-model="member.address"
        /><br />
      </div>
      <button @click="joinMethod">회원가입</button>
    </div>
  </div>
</template>

<script>
import { join } from "@/api/member.js";
export default {
  data() {
    return {
      member: {
        name: "",
        id: "",
        password: "",
        passwordchk: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    joinMethod() {
      join(
        {
          id: this.member.id,
          name: this.member.name,
          password: this.member.password,
          phone: this.member.phone,
          address: this.member.address,
          email: this.member.email,
        },
        (response) => {
          let msg = "회원가입 중 문제가 발생했습니다.";
          console.log(response);
          if (response.data.message === "success") {
            msg = "회원가입이 완료되었습니다.";
          }
          alert(msg);
        },
        () => {},
      );
      this.$router.push("/login");
    },

    // async joinMethod() {
    //   http.post("/member/regist", { params: this.member }).then(({ data }) => {

    //     this.$router.push("/login");
    //   });
    // },
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
