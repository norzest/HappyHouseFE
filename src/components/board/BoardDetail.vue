<template>
  <div class="detail">
    <div class="title">{{ article.title }}</div>
    <div class="info">
      <div>
        <span class="writerid">
          {{ article.writerId }}
        </span>
        <span class="createdat">{{ article.createdAt }}</span>
      </div>
      <div v-if="userInfo.id == article.writerId">
        <button @click="mvModifyArticle">수정</button>
        <button @click="deleteArticle">삭제</button>
      </div>
    </div>
    <div class="line"></div>
    <div v-html="article.content" class="content"></div>
    <div class="line"></div>
    <div class="btnset">
      <div></div>
      <button @click="mvBoardList()">목록</button>
    </div>
  </div>
</template>

<script>
import { boardDetail, boardDelete } from "@/api/board";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  data() {
    return {
      article: {},
    };
  },
  created() {
    boardDetail(
      this.$route.params.id,
      (data) => {
        this.article = data.data.article;
      },
      () => {},
    );
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    mvModifyArticle() {
      this.$router.push({ name: "boardModify" });
    },
    deleteArticle() {
      if (confirm("삭제하시겠습니까?")) {
        boardDelete(
          this.article.id,
          () => {
            alert("삭제되었습니다.");
          },
          () => {},
        );
        this.$router.go(this.$router.push({ name: "boardList" }));
      }
    },
    mvBoardList() {
      this.$router.push({ name: "boardList" });
    },
    registComment() {},
  },
  // filters: {
  //   time(val) {
  //     return val.substr(0, 16);
  //   },
  // },
};
</script>

<style scoped>
.detail {
  margin: 40px 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 32px;
  font-weight: bold;
}

.info {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.writerid {
  font-size: 18px;
}
.createdat {
  margin-left: 10px;
  color: gray;
}
.line {
  width: 100%;
  position: relative;
  background-color: lightgray;
  height: 1px;
}
.content {
  padding: 30px 0;
  margin-bottom: 30px;
}
.info button {
  background-color: transparent;
  border: none;
  text-decoration: underline gray;
  cursor: pointer;
}
.btnset {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.btnset button {
  border: 1px solid #996a54;
  color: #996a54;
  font-weight: bold;
  padding: 2px 5px;
  background-color: #fff;
  margin: 20px 5px;
  padding: 5px 7px;
  border-radius: 5px;
  cursor: pointer;
}
.btnset button:hover {
  background-color: #996a54;
  color: white;
}
</style>
