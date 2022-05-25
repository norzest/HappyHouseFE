<template>
  <div class="deleteform">
    <div class="deletebox">
      <div class="deletetitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="delete">
        <p>변경할 비밀번호를 입력해주세요.</p>
        <label
          for="password"
          class="inputpassword inputtext"
          :class="{ ip: ippassword }"
        >
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            :class="{ ipf: ippassword }"
          />
        </label>
        <label
          for="passwordchk"
          class="inputpasswordchk inputtext"
          :class="{ ip: ippasswordchk }"
        >
          <input
            type="password"
            id="passwordchk"
            name="passwordchk"
            v-model="passwordchk"
            :class="{ ipf: ippasswordchk }"
          />
        </label>
        <button @click="searchPassword">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import { passwordChange } from "@/api/member.js";
export default {
  data() {
    return {
      id: "",
      password: "",
      passwordchk: "",
    };
  },
  created() {
    const info = this.$store.getters["memberStore/checkUserInfo"];
    this.id = info.id;
  },
  computed: {
    ippassword() {
      return this.password ? true : false;
    },
    ippasswordchk() {
      return this.passwordchk ? true : false;
    },
  },
  methods: {
    searchPassword() {
      if (this.password === this.passwordchk) {
        passwordChange(
          {
            id: this.id,
            password: this.password,
          },
          () => {
            alert("비밀번호 변경이 완료되었습니다.");
            this.$router.push({ name: "profile" });
          },
          () => {},
        );
      } else alert("두 비밀번호가 다릅니다.");
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
.inputpasswordchk::before {
  content: "비밀번호 확인";
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
