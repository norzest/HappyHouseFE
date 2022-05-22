<template>
  <div class="aptInfo" @click="aptDetail">
    <div class="imsi_img"></div>
    <div class="imsi_interested"></div>
    <div>
      <p>{{ apartmentName }}</p>
      <p>{{ juso }}</p>
      <p>{{ min }}만원 ~ {{ max }}만원</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const aptStore = "aptStore";

export default {
  name: "aptInfoItem",
  props: {
    aptCode: Number,
    apartmentName: String,
    juso: String,
    min: String,
    max: String,
  },
  methods: {
    ...mapActions(aptStore, ["detailApt"]),

    aptDetail() {
      var aptDt = {
        apartmentName: this.apartmentName,
        juso: this.juso,
      };
      this.detailApt(aptDt);
    },
  },
};
</script>

<style></style>
