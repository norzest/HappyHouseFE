<template>
  <div>
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
    <div class="btngroup">
      <button @click="pgListArticle(1)" class="pagebtn">〈〈</button>
      <span v-for="p in pgs" :key="p"
        ><button
          @click="pgListArticle(p)"
          class="pagebtn"
          :class="{ act: p == nav.currentPage }"
        >
          {{ p }}
        </button></span
      >
      <button @click="pgListArticle(nav.totalPageCount)" class="pagebtn">
        〉〉
      </button>
    </div>
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
      nav: null,
      startPg: null,
      endPg: null,
      pgs: [],
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
        this.nav = response.data.navi;
        this.startPg =
          ((this.nav.currentPage - 1) / this.nav.naviSize) * this.nav.naviSize +
          1;
        this.endPg = this.startPg + this.nav.naviSize - 1;
        if (this.endPg > this.nav.totalPageCount) {
          this.endPg = this.nav.totalPageCount;
        }
        this.pgs = [];
        if (
          this.endPg > this.nav.totalPageCount - this.nav.naviSize / 2 + 1 &&
          this.nav.totalPageCount >= 5
        ) {
          for (
            var i = this.nav.totalPageCount - 4;
            i <= this.nav.totalPageCount;
            i++
          ) {
            this.pgs.push(i);
          }
        } else {
          for (var j = this.startPg; j <= this.endPg; j++) {
            this.pgs.push(j);
          }
        }
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
    pgListArticle(npg) {
      if (npg <= 0 || npg > this.nav.totalPageCount) {
        let pg = this.nav.currentPage;
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
            this.nav = response.data.navi;
            this.startPg =
              ((this.nav.currentPage - 1) / this.nav.naviSize) *
                this.nav.naviSize +
              1;
            this.endPg = this.startPg + this.nav.naviSize - 1;
            if (this.endPg > this.nav.totalPageCount) {
              this.endPg = this.nav.totalPageCount;
            }
            this.pgs = [];
            if (
              this.endPg >
                this.nav.totalPageCount - this.nav.naviSize / 2 + 1 &&
              this.nav.totalPageCount >= 5
            ) {
              for (
                var i = this.nav.totalPageCount - 4;
                i <= this.nav.totalPageCount;
                i++
              ) {
                this.pgs.push(i);
              }
            } else {
              for (var j = this.startPg; j <= this.endPg; j++) {
                this.pgs.push(j);
              }
            }
          },
          (error) => {
            console.log(error);
          },
        );
      } else {
        let pg = npg;
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
            this.nav = response.data.navi;
            this.startPg =
              ((this.nav.currentPage - 1) / this.nav.naviSize) *
                this.nav.naviSize +
              1;
            this.endPg = this.startPg + this.nav.naviSize - 1;
            if (this.endPg > this.nav.totalPageCount) {
              this.endPg = this.nav.totalPageCount;
            }
            this.pgs = [];
            if (
              this.endPg >
                this.nav.totalPageCount - this.nav.naviSize / 2 + 1 &&
              this.nav.totalPageCount >= 5
            ) {
              for (
                var i = this.nav.totalPageCount - 4;
                i <= this.nav.totalPageCount;
                i++
              ) {
                this.pgs.push(i);
              }
            } else {
              for (var j = this.startPg; j <= this.endPg; j++) {
                this.pgs.push(j);
              }
            }
          },
          (error) => {
            console.log(error);
          },
        );
      }
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

/* .pagebtn {
  margin-left: 5px;
  background: #996a54;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
} */
.pagebtn {
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  background-color: white;
  border: 1px solid #996a54;
  border-radius: 5px;
  color: #996a54;
  margin: 2px;
  min-width: 30px;
  cursor: pointer;
  font-weight: bold;
}
.pagebtn:hover,
.act {
  background-color: #996a54;
  color: white;
}
.btngroup {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
/* .btngroup {
  margin-top: 20px;
  text-align: center;
} */
</style>
