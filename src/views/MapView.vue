<template>
  <div>
    <local-bar class="localbar"></local-bar>
    <div class="aptmaplist">
      <apt-info-list
        v-show="!apt.apartmentName"
        class="aptinfolist"
      ></apt-info-list>
      <apt-detail v-show="apt.apartmentName" class="aptinfolist"></apt-detail>
      <kakao-map class="kakaomap"></kakao-map>
    </div>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import LocalBar from "@/components/map/LocalBar.vue";
import aptInfoList from "@/components/map/aptInfoList.vue";
import aptDetail from "@/components/map/aptDetail.vue";
// import { mapState } from "vuex";
import { mapState, mapActions } from "vuex";
const aptStore = "aptStore";
const memberStore = "memberStore";
export default {
  name: "MapView",
  components: {
    KakaoMap,
    LocalBar,
    aptInfoList,
    aptDetail,
  },
  data() {
    return {
      tf: false,
    };
  },
  computed: {
    ...mapState(aptStore, ["apt"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(aptStore, ["detailApt"]),
  },
  watch: {
    userInfo() {
      const a = {
        apartmentName: null,
        juso: null,
        aptCode: null,
      };
      this.detailApt(a);
    },
  },
};
</script>

<style>
.aptmaplist {
  display: flex;
}
.aptinfolist {
  width: 320px;
  height: calc(100vh - 160px);
  overflow: auto;
  padding: 0 10px;
  margin-top: 80px;
}
.aptinfolist::-webkit-scrollbar {
  width: 12px;
}

.aptinfolist::-webkit-scrollbar-thumb {
  background-color: #996a54;
  border-radius: 12px;
  background-clip: padding-box;
  border: 3px solid transparent;
}

.aptinfolist::-webkit-scrollbar-track {
  border-radius: 12px;
  margin: 5px 0;
}
.localbar {
  position: absolute;
  z-index: 5;
}

@media screen and (max-width: 768px) {
}
</style>
