<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <board-list-item
          v-for="article in articles"
          :key="article.id"
          v-bind="article"
        ></board-list-item>
      </tbody>
    </table>
    <button @click="mvWrite()">글작성</button>
  </div>
</template>

<script>
import BoardListItem from "@/components/board/item/BoardListItem";
import { listArticle } from "@/api/board.js";

export default {
  name: "BoardList",
  components: {
    BoardListItem,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    let pg = 1;
    let key = null;
    let word = null;
    let boardType = "free";

    listArticle(
      pg,
      key,
      word,
      boardType,
      (response) => {
        this.articles = response.data.articles;
      },
      (error) => {
        console.log(error);
      },
    );
  },
  methods: {
    mvWrite() {
      this.$router.push({ name: "boardRegister" });
    },
  },
};
</script>

<style></style>
