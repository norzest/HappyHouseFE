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
import { mapState } from "vuex";

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
  computed: {
    ...mapState(aptStore, ["apts"]),
  },
  watch: {
    apts() {
      this.makeAptsSimple();
    },
  },
  methods: {
    makeAptsSimple() {
      let tempArray = [];
      this.aptsSimple = [];

      for (let item of this.apts) {
        var idx = tempArray.indexOf(item.aptCode);
        // 처음 나온 아파트 코드라면
        let chk = Number(item.dealAmount.replace(/,/gi, ""));
        if (idx < 0) {
          tempArray.push(item.aptCode);
          var temp = {
            aptCode: item.aptCode,
            apartmentName: item.aptName,
            juso: item.dong + " " + item.roadName + " " + item.jibun,
            min: String(chk),
            max: String(chk),
          };
          this.aptsSimple.push(temp);
        } else {
          if (chk < Number(this.aptsSimple[idx].min)) {
            this.aptsSimple[idx].min = String(chk);
          } else if (chk > Number(this.aptsSimple[idx].max)) {
            this.aptsSimple[idx].max = String(chk);
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
