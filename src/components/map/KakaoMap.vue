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
      aptCodes: [],
    };
  },
  computed: {
    ...mapState(aptStore, ["apt", "apts"]),
  },
  watch: {
    apts() {
      console.log("watch apts");
      this.makeList();
    },
  },
  mounted() {
    console.log("mounted");
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = KAKAO_MAP_URL;
      document.head.appendChild(script);
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
      this.markerObjs.forEach((el) => el.setMap(null));
      this.markerObjs = [];
      this.aptCodes = [];

      console.log("makeList - marker Setting");
      // 마커 세팅
      for (let item of this.apts) {
        this.setMarker(item);
      }

      // 마커 클러스터러를 생성합니다
      var clusterer = new window.kakao.maps.MarkerClusterer({
        map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      clusterer.addMarkers(this.markerObjs);
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
      const obj = this.aptCodes.find((el) => el === item.aptCode);
      let marker;

      if (!obj) {
        marker = new window.kakao.maps.Marker({
          map: this.map,
          position: coords,
          clickable: true,
          title: item.aptName,
          image: markerImage,
        });
        this.markerObjs.push(marker);
        this.aptCodes.push(item.aptCode);
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
