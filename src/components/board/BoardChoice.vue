<template>
  <div class="board">
    <div class="btn">
      <div class="choice">
        <router-link :to="{ name: 'notice' }" :class="{ checked: noticeCh }"
          >공지사항</router-link
        >
        <router-link :to="{ name: 'boardList' }" :class="{ checked: listCh }"
          >자유게시판</router-link
        >
      </div>
      <div v-if="btnCh" class="register">
        <button @click="registerBoard" class="rgboardbtn">글쓰기</button>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: null,
      registerbtn: true,
    };
  },
  computed: {
    noticeCh() {
      return this.notice;
    },
    listCh() {
      return !this.notice;
    },
    btnCh() {
      const info = this.$store.getters["memberStore/checkUserInfo"];

      if (
        this.$route.path.indexOf("list") > 0 ||
        this.$route.path.indexOf("detail") > 0
      ) {
        if (this.$route.path.indexOf("notice") > 0) {
          if (info.id === "admin") {
            return true;
          } else return false;
        } else return true;
      } else return false;
    },
  },
  created() {
    if (this.$route.path.indexOf("notice") > 0) {
      this.notice = true;
    } else this.notice = false;
    this.listCheck();
  },
  updated() {
    if (this.$route.path.indexOf("notice") > 0) {
      this.notice = true;
    } else this.notice = false;
    this.listCheck();
  },
  methods: {
    clickBoard() {
      if (this.$route.path.indexOf("notice") > 0) {
        this.notice = true;
      } else this.notice = false;
    },
    registerBoard() {
      this.notice
        ? this.$router.push({ name: "noticeRegister" })
        : this.$router.push({ name: "boardRegister" });
    },
    listCheck() {
      const info = this.$store.getters["memberStore/checkUserInfo"];
      if (this.$route.name === "list") {
        if (this.$route.path.indexOf("notice") > 0) {
          if (info.id === "admin") {
            this.registerbtn = true;
          } else this.registerbtn = false;
        } else this.registerbtn = true;
      } else this.registerbtn = false;
    },
  },
};
</script>

<style scoped>
.board {
  padding: 40px 0 0;
  font-size: 18px;
  margin: 0 20px;
}
.line {
  width: 100%;
  height: 3px;
  background-color: gray;
  position: relative;
  bottom: 3px;
  z-index: 0;
}
.board a {
  display: inline-block;
  padding: 15px 10px 15px;
  color: black;
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.register button {
  margin-right: 20px;
}
.checked {
  position: relative;
  border: 3px solid gray;
  border-bottom: 3px solid white;
  border-radius: 10px 10px 0 0;
  z-index: 10;
  font-weight: bold;
}
.rgboardbtn {
  background: #996a54;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
