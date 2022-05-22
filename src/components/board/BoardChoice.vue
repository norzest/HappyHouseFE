<template>
  <div class="board">
    <div class="btn">
      <div class="choice">
        <router-link
          :to="{ name: 'notice' }"
          :class="{ checked: noticeCh }"
          @click.native="clickNotice"
          >공지사항</router-link
        >
        <router-link
          :to="{ name: 'list' }"
          :class="{ checked: listCh }"
          @click.native="clickList"
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
      list: false,
      //   ...mapState(memberStore, ["userInfo"]),
    };
  },
  computed: {
    noticeCh() {
      return this.notice;
    },
    listCh() {
      return this.list;
    },
  },
  methods: {
    clickNotice() {
      this.notice = true;
      this.list = false;
    },
    clickList() {
      this.notice = false;
      this.list = true;
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
}
</style>
