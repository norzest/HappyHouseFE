<template>
  <div class="inputform">
    <input
      type="text"
      id="title"
      name="title"
      v-model="article.title"
      placeholder="제목"
    />
    <div class="line"></div>
    <textarea
      name="content"
      id="contnet"
      cols="30"
      rows="15"
      v-model="article.content"
      placeholder="내용"
    ></textarea>
    <div class="btnset">
      <button v-if="this.type === 'modify'" @click="modifyArticle">
        글수정
      </button>
      <button v-else @click="registerArticle">글작성</button>
      <button @click="mvBoardList()">목록</button>
    </div>
  </div>
</template>

<script>
import { boardRegister, boardDetail, boardModify } from "@/api/board.js";
export default {
  name: "BoardInputItem",
  data() {
    return {
      article: {
        id: "",
        title: "",
        writerId: "test",
        content: "",
        boardType: "free",
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    this.article.writerId = this.$store.getters["memberStore/checkUserInfo"].id;
    this.article.id = this.$route.params.id;
    if (this.type === "modify") {
      boardDetail(
        this.$route.params.id,
        (data) => {
          this.article.title = data.data.article.title;
          this.article.content = data.data.article.content;
        },
        () => {},
      );
    }
  },
  methods: {
    modifyArticle() {
      boardModify(
        {
          id: this.article.id,
          title: this.article.title,
          content: this.article.content,
        },
        () => {},
        () => {},
      );

      this.$router.go(
        this.$router.push({
          name: "boardDetail",
          params: { id: this.article.id },
        }),
      );
    },
    registerArticle() {
      boardRegister(
        {
          title: this.article.title,
          writerId: this.article.writerId,
          content: this.article.content,
          boardType: this.article.boardType,
        },
        () => {},
        () => {},
      );
      this.$router.go(this.$router.push({ name: "boardList" }));
    },
    mvBoardList() {
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style scoped>
.inputform {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 50px;
}
.inputform input {
  font-size: 32px;
  font-weight: bold;
  border: none;
}
.inputform input:focus {
  outline: none;
}
.line {
  width: 100%;
  position: relative;
  background-color: lightgray;
  height: 1px;
  margin: 30px 0;
}
.inputform textarea {
  border: none;
  font-size: 16px;
  font-family: sans-serif;
}
.inputform textarea:focus {
  outline: none;
}
.btnset {
  display: flex;
  justify-content: flex-end;
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
