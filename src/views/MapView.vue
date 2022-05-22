<template>
  <div>
    <local-bar></local-bar>
    <apt-info-list></apt-info-list>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import LocalBar from "@/components/map/LocalBar.vue";
import aptInfoList from "@/components/map/aptInfoList.vue";

export default {
  name: "MapView",
  components: {
    KakaoMap,
    LocalBar,
    aptInfoList,
  },
};
</script>

<style></style>
