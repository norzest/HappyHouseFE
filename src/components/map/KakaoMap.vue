<template>
  <div id="map"></div>
</template>

<script>
import { KAKAO_MAP_URL } from "@/config";

export default {
  name: "KaKaoMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = KAKAO_MAP_URL;

      script.addEventListener("load", () => {
        window.kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      this.initMap();
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.5642135, 127.0016985),
        level: 8,
      };

      this.map = new window.kakao.maps.Map(container, options);

      //var imageSrc =
      //    "https://user-images.githubusercontent.com/57048162/158428602-3b9ee135-2fc8-4d52-ac52-114160e38409.png", // 마커이미지의 주소입니다
      //  imageSize = new kakao.maps.Size(33, 45), // 마커이미지의 크기입니다
      //  imageOption = { offset: new kakao.maps.Point(33, 45) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      //var markerImage = new kakao.maps.MarkerImage(
      //  imageSrc,
      //  imageSize,
      //  imageOption,
      //);
    },
  },
};
</script>

<style scoped>
#map {
  border: 0;
  width: 100%;
  height: 90vh;
}
</style>
