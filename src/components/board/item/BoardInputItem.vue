<template>
  <div>
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

    <button v-if="this.type === 'modify'" @click="modifyArticle">글수정</button>
    <button v-else @click="registerArticle">글작성</button>
    <button @click="mvBoardList()">목록</button>
  </div>
</template>

<script>
export default {
  name: "BoardInputItem",
  data() {
    return {
      article: {
        id: 1,
        title: "test",
        writerId: "test",
        createdAt: "test",
        hit: 1,
        content: "test",
      },
    };
  },
  props: {
    type: { type: String },
  },
  methods: {
    modifyArticle() {
      alert("연결 테스트");
    },
    registerArticle() {
      alert("연결 테스트");
    },
    mvBoardList() {
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style></style>
