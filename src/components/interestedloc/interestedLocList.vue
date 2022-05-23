<template>
  <div>
    <interested-loc-item
      v-for="apt in followapts"
      :key="apt.aptCode"
      v-bind="apt"
    ></interested-loc-item>
  </div>
</template>

<script>
import interestedLocItem from "@/components/interestedloc/item/interestedLocItem.vue";
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
const aptStore = "aptStore";

export default {
  name: "interestedLocList",
  components: {
    interestedLocItem,
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(aptStore, ["followapts"]),
  },
  created() {
    const params = {
      memberId: this.userInfo.id,
    };

    this.getFollowAptList(params);
  },
  methods: {
    ...mapActions(aptStore, ["getFollowAptList"]),
  },
};
</script>

<style></style>
