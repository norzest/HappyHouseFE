<template>
  <div class="modifyform">
    <div>
      <label for="id">이름</label>
      <input type="text" id="name" name="name" v-model="member.name" />
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
    <button @click="modifyMethod">수정</button>
  </div>
</template>

<script>
import { memberModify } from "@/api/member.js";
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
  created() {
    this.member = this.$store.getters["memberStore/checkUserInfo"];
  },
  methods: {
    modifyMethod() {
      memberModify(
        {
          id: this.member.id,
          name: this.member.name,
          password: this.member.password,
          phone: this.member.phone,
          address: this.member.address,
          email: this.member.email,
        },
        (response) => {
          let msg = "회원 정보를 수정하던 중 문제가 발생했습니다.";
          console.log(response);
          if (response.data.message === "success") {
            msg = "회원 정보 수정이 완료되었습니다.";
          }
          alert(msg);
        },
        () => {},
      );
      this.$router.push({ name: "profile" });
    },
    //   join(
    //     {
    //       id: this.member.id,
    //       name: this.member.name,
    //       password: this.member.password,
    //       phone: this.member.phone,
    //       address: this.member.address,
    //       email: this.member.email,
    //     },
    //     (response) => {
    //       let msg = "회원가입 중 문제가 발생했습니다.";
    //       console.log(response);
    //       if (response.data.message === "success") {
    //         msg = "회원가입이 완료되었습니다.";
    //       }
    //       alert(msg);
    //     },
    //     () => {},
    //   );
    //   this.$router.push("/login");
    // },
  },
};
</script>

<style>
.loginform {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
