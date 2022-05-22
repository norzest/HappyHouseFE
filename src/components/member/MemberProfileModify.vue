<template>
  <div class="modifyform">
    <div class="modifybox">
      <div class="modifytitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="modify">
        <label for="name" class="inputname inputtext" :class="{ ip: ipname }">
          <input
            type="text"
            id="name"
            name="name"
            v-model="member.name"
            ref="name"
            :class="{ ipf: ipname }"
          />
        </label>
        <label
          for="phone"
          class="inputphone inputtext"
          :class="{ ip: ipphone }"
        >
          <input
            type="tel"
            class="form-control"
            id="phone"
            name="phone"
            v-model="member.phone"
            :class="{ ipf: ipphone }"
          />
        </label>
        <label
          for="email"
          class="inputemail inputtext"
          :class="{ ip: ipemail }"
        >
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            v-model="member.email"
            :class="{ ipf: ipemail }"
          />
        </label>
        <label
          for="address"
          class="inputaddress inputtext"
          :class="{ ip: ipaddress }"
        >
          <input
            type="text"
            class="form-control"
            id="address"
            name="address"
            v-model="member.address"
            :class="{ ipf: ipaddress }"
        /></label>
      </div>
      <div class="btn">
        <button @click="checkModify">수정</button>
        <button @click="cancel">취소</button>
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
      member: {
        id: "",
        password: "",
        name: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  },
  created() {
    const info = this.$store.getters["memberStore/checkUserInfo"];
    this.member.id = info.id;
    this.member.name = info.name;
    this.member.phone = info.phone;
    this.member.email = info.email;
    this.member.address = info.address;
    this.member.password = info.password;
  },
  computed: {
    ipname() {
      return this.member.name ? true : false;
    },
    ipphone() {
      return this.member.phone ? true : false;
    },
    ipemail() {
      return this.member.email ? true : false;
    },
    ipaddress() {
      return this.member.address ? true : false;
    },
  },
  methods: {
    ...mapActions(memberStore, ["userModify"]),
    checkModify() {
      let err = true;
      let msg = "";
      !this.member.name &&
        ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
      err &&
        !this.member.phone &&
        ((msg = "전화번호를 입력해주세요"),
        (err = false),
        this.$refs.phone.focus());
      err &&
        !this.member.email &&
        ((msg = "이메일을 입력해주세요"),
        (err = false),
        this.$refs.email.focus());
      err &&
        !this.member.address &&
        ((msg = "주소를 입력해주세요"),
        (err = false),
        this.$refs.address.focus());
      if (!err) alert(msg);
      else this.modifyMethod();
    },
    modifyMethod() {
      this.userModify({
        id: this.member.id,
        password: this.member.password,
        name: this.member.name,
        phone: this.member.phone,
        address: this.member.address,
        email: this.member.email,
      });
      this.$router.push({ name: "profile" });
    },
    cancel() {
      this.$router.push({ name: "profile" });
    },
  },
};
</script>

<style scoped>
.modifyform {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

.modifybox {
  background-color: #f3f2f0;
  padding: 20px 50px 70px;
  border: 1px solid gray;
  border-radius: 5px;
}

.modifytitle {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
}

.modifytitle img {
  width: 130px;
}

.modify {
  display: flex;
  flex-direction: column;
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

.inputname::before {
  content: "이름";
}
.inputpassword::before {
  content: "비밀번호";
}
.inputphone::before {
  content: "전화번호";
}
.inputemail::before {
  content: "이메일";
}
.inputaddress::before {
  content: "주소";
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

.btn {
  display: flex;
  justify-content: center;
}
</style>
