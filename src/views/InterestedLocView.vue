<template>
  <div>
    <div>관심 매물</div>
    <interested-loc-list></interested-loc-list>
  </div>
</template>

<script>
import interestedLocList from "@/components/interestedloc/interestedLocList.vue";

export default {
  name: "InterestedLocView",
  components: {
    interestedLocList,
  },
};
</script>

<style></style>
