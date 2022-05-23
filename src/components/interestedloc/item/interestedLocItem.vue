<template>
  <div>
    <div>{{ aptName }}</div>
    <div>{{ dong }} {{ roadName }} {{ jibun }}</div>
    <button @click="deleteInterestedLoc">삭제</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteInterestedAptList } from "@/api/apt.js";

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
  },
};
</script>

<style></style>
