<template>
  <div>
    <local-bar></local-bar>
    <apt-info-list v-show="!apt.apartmentName"></apt-info-list>
    <apt-detail v-show="apt.apartmentName"></apt-detail>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import LocalBar from "@/components/map/LocalBar.vue";
import aptInfoList from "@/components/map/aptInfoList.vue";
import aptDetail from "@/components/map/aptDetail.vue";
import { mapState } from "vuex";

const aptStore = "aptStore";

export default {
  name: "MapView",
  components: {
    KakaoMap,
    LocalBar,
    aptInfoList,
    aptDetail,
  },
  computed: {
    ...mapState(aptStore, ["apt"]),
  },
};
</script>

<style></style>
