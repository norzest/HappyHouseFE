<template>
  <div>
    <div>{{ aptName }}</div>
    <div>{{ dong }} {{ roadName }} {{ jibun }}</div>
    <button @click="deleteInterestedLoc">삭제</button>
  </div>
</template>

<script>
import { deleteInterestedAptList } from "@/api/apt.js";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "interestedLocItem",
  props: {
    dong: String,
    roadName: String,
    jibun: String,
    aptName: String,
    aptCode: String,
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    deleteInterestedLoc() {
      const params = {
        aptCode: this.aptCode,
        memberId: this.userInfo.id,
      };
      deleteInterestedAptList(
        params,
        (response) => {
          console.log(response);
          alert("관심지역을 삭제하였습니다");
        },
        (error) => {
          console.log(error);
        },
      );

      this.$router.go();
    },
  },
};
</script>

<style></style>
