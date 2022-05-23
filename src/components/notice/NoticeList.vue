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
import NoticeListItem from "@/components/notice/item/NoticeListItem.vue";
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
};
</script>

<style>
.table {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.boardtable {
  width: 80%;
}

.boardtable thead {
  background-color: #e9e8e6;
}

.boardtable thead,
.boardtable tbody {
  text-align: center;
}
.boardtable tr td,
.boardtable tr th {
  padding: 10px;
}

.boardtable tbody tr:nth-child(2n) {
  background-color: #f3f2f0;
}
</style>
