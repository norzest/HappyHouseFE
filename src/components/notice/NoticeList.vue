<template>
  <div class="table">
    <table class="boardtable">
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 40%" />
        <col style="width: 20%" />
        <col style="width: 20%" />
        <col style="width: 10%" />
      </colgroup>
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
        <notice-list-item
          v-for="article in articles"
          :key="article.id"
          v-bind="article"
        ></notice-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import NoticeListItem from "@/components/notice/item/NoticeListItem";
import { listArticle } from "@/api/board.js";

export default {
  name: "BoardList",
  components: {
    NoticeListItem,
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
    let boardType = "anno";

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
      this.$router.push({ name: "noticeRegister" });
    },
  },
};
</script>

<style>
.table {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.boardtable {
  width: 100%;
  margin: 0 20px;
}

.boardtable thead {
  background-color: #c6957f;
  color: white;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
}
.boardtable thead,
.boardtable tbody {
  text-align: center;
}
.boardtable tr td,
.boardtable tr th {
  padding: 13px 10px;
}
</style>
