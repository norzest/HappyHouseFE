<template>
  <div>
    <div>{{ apt.apartmentName }}</div>
    <div>{{ apt.juso }}</div>
    <div>
      <table>
        <thead>
          <tr>
            <th>거래년도</th>
            <th>가격</th>
            <th>면적</th>
            <th>층</th>
          </tr>
        </thead>
        <tbody>
          <apt-detail-item
            v-for="(detail, index) in aptDetail"
            :key="index"
            v-bind="detail"
          ></apt-detail-item>
        </tbody>
      </table>
    </div>
    <button @click="aptList">뒤로가기</button>
  </div>
</template>

<script>
import aptDetailItem from "@/components/map/item/aptDetailItem.vue";
import { mapState, mapActions } from "vuex";
const aptStore = "aptStore";

export default {
  name: "aptDetail",
  components: {
    aptDetailItem,
  },
  data() {
    return {
      aptDetail: [],
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
    makeAptDetail() {
      this.aptDetail = [];
      if (this.apt.apartmentName != null) {
        for (let item of this.apts) {
          if (item.aptName == this.apt.apartmentName) {
            this.aptDetail.push(item);
          }
        }
        console.log(this.aptDetail);
      }
    },
  },
};
</script>

<style></style>
