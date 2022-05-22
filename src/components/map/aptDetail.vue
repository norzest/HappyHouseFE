<template>
  <div>
    <div>{{ apt.apartmentName }}</div>
    <div>{{ apt.juso }}</div>
    <button @click="aptList">뒤로가기</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const aptStore = "aptStore";

export default {
  name: "aptDetail",
  data() {
    return {
      aptDetail: null,
    };
  },
  computed: {
    ...mapState(aptStore, ["apt", "apts"]),
  },
  watch: {
    apt() {
      this.makeAptDetail();
    },
  },
  methods: {
    ...mapActions(aptStore, ["detailApt"]),

    aptList() {
      const a = {
        apartmentName: null,
        juso: null,
      };
      this.detailApt(a);
    },
    makeAptDetail() {},
  },
};
</script>

<style></style>
