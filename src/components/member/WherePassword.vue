<template>
  <div class="deleteform">
    <div class="deletebox">
      <div class="deletetitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="delete">
        <p>아이디와 이메일을 입력해주세요.</p>
        <label for="id" class="inputid inputtext" :class="{ ip: ipid }">
          <input
            type="text"
            id="id"
            name="id"
            v-model="id"
            :class="{ ipf: ipid }"
          />
        </label>
        <label
          for="email"
          class="inputemail inputtext"
          :class="{ ip: ipemail }"
        >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            :class="{ ipf: ipemail }"
          />
        </label>
        <button @click="searchPassword">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import { searchId, passwordSearch } from "@/api/member.js";
export default {
  data() {
    return {
      id: "",
      email: "",
    };
  },
  computed: {
    ipid() {
      return this.id ? true : false;
    },
    ipemail() {
      return this.email ? true : false;
    },
  },
  methods: {
    searchPassword() {
      let useremail = null;
      searchId(
        this.id,
        (response) => {
          if (response.data.message === "success") {
            useremail = response.data.email;
            console.log(useremail);
            if (this.email === useremail) {
              passwordSearch(
                {
                  id: this.id,
                  email: this.email,
                },
                () => {
                  alert("비밀번호가 변경되었습니다. 메일을 확인해주세요.");
                  this.$router.push({ name: "login" });
                },
                () => {},
              );
            } else alert("계정에 등록된 이메일과 다릅니다.");
          } else alert("존재하지 않는 아이디입니다.");
        },
        () => {},
      );
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
.inputid::before {
  content: "아이디";
}
.inputemail::before {
  content: "이메일";
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
