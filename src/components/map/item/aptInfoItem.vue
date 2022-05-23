<template>
  <div class="aptInfo">
    <div class="interested">
      <img src="../../../assets/img/star_no.png" alt="" />
    </div>
    <div class="aptlist" @click="aptDetail">
      <div class="pickimg"></div>
      <div class="apttext">
        <p class="title">{{ apartmentName }}</p>
        <p class="juso">{{ juso }}</p>
        <p class="money">{{ min | eok }}억 ~ {{ max | eok }}억</p>
      </div>
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
  filters: {
    eok(val) {
      return (
        val.substring(0, val.length - 5) +
        "." +
        val.substring(val.length - 5, val.length - 4)
      );
    },
  },
};
</script>

<style scoped>
.aptInfo {
  position: relative;
  align-items: center;
}
.pickimg {
  width: 60px;
  height: 60px;
  background-color: #e9e8e6;
  border-radius: 30px;
  margin-right: 15px;
  flex-shrink: 0;
}
.interested {
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 3;
}
.interested img {
  width: 25px;
  height: 25px;
}
.apttext {
  width: 240px;
  padding: 30px 0 5px;
}
.apttext .title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.juso {
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
  padding-left: 10px;
}
.money {
  font-size: 14px;
  color: gray;
  padding-left: 10px;
}
.aptlist {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  position: relative;
  align-items: center;
}
</style>
