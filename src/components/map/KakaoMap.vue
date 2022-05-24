<template>
  <div id="map"></div>
</template>

<script>
import { KAKAO_MAP_URL } from "@/config";
import { mapState, mapActions } from "vuex";

const aptStore = "aptStore";

export default {
  name: "KaKaoMap",
  data() {
    return {
      map: null,
      count: 0,
      markerObjs: [],
    };
  },
  computed: {
    ...mapState(aptStore, ["apt", "apts"]),
  },
  watch: {
    apts() {
      this.makeList();
    },
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
    ...mapActions(aptStore, ["detailApt"]),
    initMap() {
      const container = document.getElementById("map");
      this.count = 0;
      const options = {
        center: new window.kakao.maps.LatLng(37.5642135, 127.0016985),
        level: 8,
      };

      this.map = new window.kakao.maps.Map(container, options);
    },
    makeList() {
      // 마커 초기화
      this.count = 0;
      this.markerObjs.forEach((el) => el.marker.setMap(null));
      this.markerObjs = [];

      // 마커 세팅
      for (let item of this.apts) {
        this.setMarker(item);
      }
    },
    setMarker(item) {
      var imageSrc =
          "https://user-images.githubusercontent.com/57048162/158428602-3b9ee135-2fc8-4d52-ac52-114160e38409.png", // 마커이미지의 주소입니다
        imageSize = new window.kakao.maps.Size(33, 45), // 마커이미지의 크기입니다
        imageOption = { offset: new window.kakao.maps.Point(33, 45) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      var markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      var coords = new window.kakao.maps.LatLng(item.lat, item.lng);
      const obj = this.markerObjs.find((el) => el.aptCode === item.aptCode);
      let marker;
      if (!obj) {
        marker = new window.kakao.maps.Marker({
          map: this.map,
          position: coords,
          clickable: true,
          title: item.aptName,
          image: markerImage,
        });
        this.markerObjs.push({ marker, aptCode: item.aptCode });

        window.kakao.maps.event.addListener(marker, "click", () => {
          var aptDt = {
            apartmentName: item.aptName,
            juso: item.dong + " " + item.roadName + " " + item.jibun,
            aptCode: item.aptCode,
          };
          this.detailApt(aptDt);
          this.map.setLevel(5);
          this.map.panTo(marker.getPosition());
        });
      }

      if (this.count == 0) {
        this.count += 1;
        this.map.setCenter(coords);
        this.map.setLevel(6);
      }
    },
  },
};
</script>

<style scoped>
#map {
  border: 0;
  width: calc(100% - 320px);
  height: calc(100vh - 80px);
}
</style>
