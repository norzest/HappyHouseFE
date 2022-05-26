<template>
  <div class="newstab">
    <div class="newshead">
      <h2>부동산 소식</h2>
    </div>
    <!-- <carousel :autoplay="true" :nav="false" :dots="false" class="marginTop50">
     
    </carousel> -->
    <carousel v-bind="options">
      <div class="news">
        <a :href="news[1].link"
          ><img :src="news[1].img" alt="" width="50px" />
          <p>{{ news[1].title }}</p>
        </a>
      </div>
      <div class="news">
        <a :href="news[0].link"
          ><img :src="news[0].img" alt="" width="50px" />
          <p>{{ news[0].title }}</p>
        </a>
      </div>
      <div class="news">
        <a :href="news[2].link"
          ><img :src="news[2].img" alt="" width="50px" />
          <p>{{ news[2].title }}</p>
        </a>
      </div>
      <div class="news">
        <a :href="news[4].link"
          ><img :src="news[4].img" alt="" width="50px" />
          <p>{{ news[4].title }}</p>
        </a>
      </div>
      <div class="news">
        <a :href="news[6].link"
          ><img :src="news[6].img" alt="" width="50px" />
          <p>{{ news[6].title }}</p>
        </a>
      </div>
      <div class="news">
        <a :href="news[7].link"
          ><img :src="news[7].img" alt="" width="50px" />
          <p>{{ news[7].title }}</p>
        </a>
      </div>
      <div class="news">
        <a :href="news[9].link"
          ><img :src="news[9].img" alt="" width="50px" />
          <p>{{ news[9].title }}</p>
        </a>
      </div>
    </carousel>
  </div>
</template>

<script>
// import { newsCrawl } from "@/api/crawl.js";
import carousel from "vue-owl-carousel";
import axios from "axios";
export default {
  components: { carousel },
  data() {
    return {
      news: null,
      options: {
        items: 3,
        autoplay: true,
        nav: false,
      },
    };
  },
  created() {
    // newsCrawl(
    //   (response) => {
    //     console.log(response.data.news);
    //   },
    //   () => {
    //     console.log("??");
    //   },
    // );
    axios
      .get("http://localhost:8080/happyhouse/crawl")
      .then((response) => {
        this.news = response.data.news;
      })
      .catch();
  },
};
</script>

<style scoped>
.newshead {
  padding: 30px 20px;
  font-size: 20px;
}
.news a {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.news p {
  font-size: 18px;
  display: block;
  padding: 20px 0 10px;
  font-weight: bold;
  margin: 0 20px;
}
.news img {
  width: 280px !important;
}
.newstab {
  margin-bottom: 30px;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: brown !important;
}
</style>
