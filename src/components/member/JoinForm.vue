<template>
  <div class="joinform">
    <div class="joinbox">
      <div class="jointitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="join">
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
        <label for="id" class="inputid inputtext" :class="{ ip: ipid }">
          <input
            type="text"
            id="id"
            name="id"
            v-model="member.id"
            ref="id"
            :class="{ ipf: ipid }"
          />
        </label>
        <label
          for="password"
          class="inputpassword inputtext"
          :class="{ ip: ippassword }"
        >
          <input
            type="password"
            id="password"
            name="password"
            v-model="member.password"
            ref="password"
            :class="{ ipf: ippassword }"
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
            ref="phone"
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
            ref="email"
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
            ref="address"
            :class="{ ipf: ipaddress }"
            @keyup.enter="checkJoin"
          />
        </label>
        <button @click="checkJoin">회원가입</button>
      </div>
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
        phone: "",
        email: "",
        address: "",
      },
    };
  },
  computed: {
    ipname() {
      return this.member.name ? true : false;
    },
    ipid() {
      return this.member.id ? true : false;
    },
    ippassword() {
      return this.member.password ? true : false;
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
    checkJoin() {
      let err = true;
      let msg = "";
      !this.member.name &&
        ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
      err &&
        !this.member.id &&
        ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.id.focus());
      err &&
        !this.member.password &&
        ((msg = "비밀번호를 입력해주세요"),
        (err = false),
        this.$refs.password.focus());
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
      else this.joinMethod();
    },
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
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.joinform {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

.joinbox {
  background-color: #f3f2f0;
  padding: 20px 50px 70px;
  border: 1px solid gray;
  border-radius: 5px;
}

.jointitle {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
}

.jointitle img {
  width: 130px;
}

.join {
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
  margin-top: 20px;
  background-color: #996a54;
  color: white;
  font-weight: bold;
}

.inputname::before {
  content: "이름";
}
.inputid::before {
  content: "아이디";
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
</style>
