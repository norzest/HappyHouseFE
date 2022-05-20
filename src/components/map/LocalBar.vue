<template>
  <div>
    <div class="row">
      <div class="col">
        <select class="form-select" id="juso1">
          <option>시/도</option>
          <option v-for="sido in sidoList" :key="sido.sidoCode">
            {{ sido.sidoName }}
          </option>
        </select>
      </div>
      <div class="col">
        <select class="form-select" id="juso2">
          <option>시/군/구</option>
        </select>
      </div>
      <div class="col">
        <select class="form-select" id="juso3">
          <option>읍/면/동</option>
        </select>
      </div>
    </div>
    <div>
      <button>조회하기</button>
    </div>
  </div>
</template>

<script>
import { getSido } from "@/api/local.js";

export default {
  name: "LocalBar",
  data() {
    return {
      year: null,
      month: null,
      sidoList: [],
      gugunList: [],
      dongList: [],
    };
  },
  mounted() {
    getSido(
      (response) => {
        this.sidoList = response.data;
      },
      (error) => {
        console.log(error);
      },
    );
  },
};
</script>

<style></style>
