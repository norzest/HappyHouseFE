<template>
  <div class="detail">
    <label for="id">글번호</label>
    <div>{{ article.id }}</div>
    <label for="title">제목</label>
    <div>{{ article.title }}</div>
    <label for="writerId">작성자</label>
    <div>{{ article.writerId }}</div>
    <label for="createdAt">작성일</label>
    <div>{{ article.createdAt }}</div>
    <label for="hit">조회수</label>
    <div>{{ article.hit }}</div>
    <label for="content">내용</label>
    <div v-html="article.content"></div>

    <div v-if="userInfo.id == article.writerId">
      <button @click="mvModifyArticle">글수정</button>
      <button @click="deleteArticle">글삭제</button>
    </div>
    <button @click="mvBoardList()">목록</button>
  </div>
</template>

<script>
import { boardDetail } from "@/api/board";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  data() {
    return {
      article: {},
    };
  },
  created() {
    const id = this.$route.params.id;
    boardDetail(
      id,
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
      alert("연결 테스트");
    },
    mvBoardList() {
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style scoped>
.detail {
  margin: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
