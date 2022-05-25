<template>
  <div class="aptListContainer">
    <apt-info-item
      v-for="(aptSimple, index) in aptsSimple"
      :key="index"
      v-bind="aptSimple"
    ></apt-info-item>
  </div>
</template>

<script>
import aptInfoItem from "@/components/map/item/aptInfoItem.vue";
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
const aptStore = "aptStore";

export default {
  name: "aptInfoList",
  data() {
    return {
      aptsSimple: [],
    };
  },
  components: {
    aptInfoItem,
  },
  created() {
    const params = {
      memberId: this.userInfo.id,
    };

    this.getFollowAptList(params);
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(aptStore, ["apts"]),
  },
  watch: {
    apts() {
      this.makeAptsSimple();
    },
  },
  methods: {
    ...mapActions(aptStore, ["getFollowAptList"]),
    makeAptsSimple() {
      let tempArray = [];
      this.aptsSimple = [];

      for (let item of this.apts) {
        var idx = tempArray.indexOf(item.aptCode);
        // 처음 나온 아파트 코드라면
        if (idx < 0) {
          tempArray.push(item.aptCode);
          var temp = {
            aptCode: item.aptCode,
            apartmentName: item.aptName,
            juso: item.dong + " " + item.roadName + " " + item.jibun,
            min: item.dealAmount,
            max: item.dealAmount,
          };

          this.aptsSimple.push(temp);
        } else {
          if (item.dealAmount < this.aptsSimple[idx].min) {
            this.aptsSimple[idx].min = item.dealAmount;
          } else if (item.dealAmount > this.aptsSimple[idx].max) {
            this.aptsSimple[idx].max = item.dealAmount;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.aptInfo {
  cursor: pointer;
}
</style>
