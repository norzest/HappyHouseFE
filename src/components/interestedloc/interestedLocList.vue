<template>
  <div>
    <interested-loc-item
      v-for="apt in followApt"
      :key="apt.aptCode"
      v-bind="apt"
    ></interested-loc-item>
  </div>
</template>

<script>
import interestedLocItem from "@/components/interestedloc/item/interestedLocItem.vue";
import { interestedAptList } from "@/api/apt.js";
import { mapState } from "vuex";
const memberStore = "memberStore";

export default {
  name: "interestedLocList",
  components: {
    interestedLocItem,
  },
  data() {
    return {
      followApt: [],
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    const params = {
      memberId: this.userInfo.id,
    };

    interestedAptList(
      params,
      (response) => {
        this.followApt = response.data;
      },
      (error) => {
        console.log(error);
      },
    );
  },
};
</script>

<style></style>
