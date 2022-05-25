<template>
  <div class="interesteditem">
    <!-- <div style="text-align: right"> -->
    <button @click="deleteInterestedLoc" class="deletebtn">×</button>
    <!-- </div> -->
    <div class="aptimg">
      <img @click="mvAptDetail" src="@/assets/img/apt.jpg" alt="" />
    </div>
    <div class="aptname">{{ aptName }}</div>
    <div class="address">{{ dong }} {{ roadName }} {{ jibun }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { deleteInterestedAptList } from "@/api/apt.js";

const aptStore = "aptStore";
const memberStore = "memberStore";

export default {
  name: "interestedLocItem",
  props: {
    dong: String,
    roadName: String,
    jibun: String,
    aptName: String,
    aptCode: Number,
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(aptStore, ["detailApt", "getAptList"]),
    deleteInterestedLoc() {
      const params = {
        aptCode: this.aptCode,
        memberId: this.userInfo.id,
      };
      deleteInterestedAptList(
        params,
        () => {
          this.getFollowAptList(params);
        },
        (error) => {
          console.log(error);
        },
      );

      this.$router.go();
    },
    mvAptDetail() {
      var aptDt = {
        apartmentName: this.aptName,
        juso: this.dong + " " + this.roadName + " " + this.jibun,
        aptCode: this.aptCode,
      };
      this.detailApt(aptDt);

      const dym = {
        dongCode: null,
        year: null,
        month: null,
        apartmentName: this.aptName,
      };
      this.getAptList(dym);

      this.$router.push("/map");
    },
  },
};
</script>

<style scoped>
.interesteditem {
  margin: 20px;
  position: relative;
}

.aptimg img {
  width: 100%;
}
.aptname {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}
.address {
  color: gray;
  margin: 10px 0;
}
.deletebtn {
  font-size: 30px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 5px;
  color: gray;
}
</style>
