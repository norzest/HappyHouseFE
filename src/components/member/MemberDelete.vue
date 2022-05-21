<template>
  <div class="deleteform">
    <div class="deletebox">
      <div class="deletetitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="delete">
        <p>비밀번호를 입력해주세요.</p>
        <label
          for="pwd"
          class="inputpassword inputtext"
          :class="{ ip: ippassword }"
        >
          <input
            type="password"
            id="pwd"
            name="pwd"
            v-model="password"
            :class="{ ipf: ippassword }"
            @keyup.enter="loginMethod"
          />
        </label>
        <button @click="deleteMethod">확인</button>
      </div>
    </div>
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
  computed: {
    ippassword() {
      return this.password ? true : false;
    },
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

<style scoped>
.deleteform {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.deletebox {
  background-color: #f3f2f0;
  padding: 20px 50px 70px;
  border: 1px solid gray;
  border-radius: 5px;
}
.deletetitle {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
}

.deletetitle img {
  width: 130px;
}
.delete {
  display: flex;
  flex-direction: column;
}
.delete p {
  text-align: center;
  margin: 10px 0 15px;
}
input {
  display: inline-block;
  width: 290px;
  height: 40px;
  border-radius: 5px;
  margin: 5px 0;
  padding-left: 15px;
  border: 1px solid gray;
}
button {
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 20px 5px 0;
  background-color: #996a54;
  color: white;
  font-weight: bold;
  padding: 0 10px;
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
