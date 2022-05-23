<template>
  <div class="board">
    <div class="btn">
      <div class="choice">
        <router-link
          :to="{ name: 'notice' }"
          :class="{ checked: noticeCh }"
          @click.native="clickBoard"
          >공지사항</router-link
        >
        <router-link
          :to="{ name: 'boardList' }"
          :class="{ checked: listCh }"
          @click.native="clickBoard"
          >자유게시판</router-link
        >
      </div>
      <div class="register">
        <button @click="registerBoard">글쓰기</button>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
// import mapState from "vuex";
// const memberStore = "memberStore";
export default {
  data() {
    return {
      notice: true,
      //   ...mapState(memberStore, ["userInfo"]),
    };
  },
  computed: {
    noticeCh() {
      return this.notice;
    },
    listCh() {
      return !this.notice;
    },
  },
  created() {
    if (this.$route.path.indexOf("notice") > 0) {
      this.notice = true;
    } else this.notice = false;
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
</style>
