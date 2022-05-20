<template>
  <div>
    비밀번호를 입력해주세요
    <input type="password" v-model="password" />
    <button @click="deleteMethod">확인</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const memberStore = "memberStore";
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    ...mapActions(memberStore, ["userDelete"]),
    deleteMethod() {
      const id = this.$store.getters["memberStore/checkUserInfo"].id;
      const pwd = this.$store.getters["memberStore/checkUserInfo"].password;
      if (this.password === pwd) {
        console.log(pwd);
        if (confirm("정말 탈퇴하시겠습니까?")) {
          this.userDelete({
            id: id,
            password: pwd,
          });
          alert("탈퇴되었습니다.");
          this.$router.push({ name: "home" });
        } else {
          this.$router.push({ name: "profile" });
        }
      } else {
        alert("잘못된 비밀번호입니다.");
        this.password = "";
      }
    },
  },
};
</script>

<style></style>
