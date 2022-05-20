<template>
  <div>
    <local-bar></local-bar>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import LocalBar from "@/components/map/LocalBar.vue";

export default {
  name: "MapView",
  components: {
    KakaoMap,
    LocalBar,
  },
};
</script>

<style></style>
