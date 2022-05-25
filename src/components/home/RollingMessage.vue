<template>
  <div class="list">
    <div class="title">
      {{ boardType == "anno" ? "공지사항" : "자유게시판" }}
    </div>
    <div class="contents">
      <div class="cnts">
        <div v-for="article in articles" :key="article.id">
          <div class="content" @click="clickboard(article.id)">
            <p>{{ article.title }}</p>
            <p>{{ article.createdAt | date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { listArticle } from "@/api/board.js";
export default {
  props: {
    boardType: String,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    listArticle(
      1,
      null,
      null,
      this.boardType,
      (response) => {
        this.articles = response.data.articles;
      },
      (error) => {
        console.log(error);
      },
    );
  },
  mounted() {
    // this.rolling();
  },
  methods: {
    clickboard(id) {
      this.$router.push(
        `/${this.boardType == "anno" ? "notice" : "board"}/detail/${id}`,
      );
    },
    rolling() {
      setInterval(function () {
        console.log(this.$refs.cntzz);
      }, 3000);
    },
  },
  filters: {
    date(val) {
      return val.substr(0, 10);
    },
  },
};
</script>

<style scoped>
.cnts-enter-active,
.cnts-leave-active {
  transform: translateY(-50px);
}
.list {
  width: 50%;
  height: 150px;
  border: 1px solid lightgray;
  padding: 10px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
}
.contents {
  margin: 20px 15px;
  height: 75px;
  overflow: hidden;
}
.cnts {
  transition: 3s;
}
/* .cnts:hover {
  transform: translateY(-50px);
} */
.content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;
}

.content:hover {
  color: gray;
  text-decoration: underline;
}
</style>
