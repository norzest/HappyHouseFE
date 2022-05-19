<template>
  <div class="about">
    <h1>{{ token }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: null,
    };
  },
  created() {
    axios
      .get("http://localhost:8080/happyhouse/member/login")
      .then(({ data }) => {
        this.token = data;
      });
  },
};
</script>
