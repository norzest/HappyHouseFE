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
      this.$router.push({ name: "noticeModify" });
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
        this.$router.go(this.$router.push({ name: "noticeList" }));
      }
    },
    mvBoardList() {
      this.$router.push({ name: "noticeList" });
    },
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
  justify-content: space-between;
}
.btnset button {
  border: 1px solid gray;
  padding: 2px 5px;
  background-color: #fff;
}
</style>
