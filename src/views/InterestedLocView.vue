<template>
  <div>
    <div class="title">
      <h2>관심 매물</h2>
    </div>
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

<style scoped>
.title {
  width: 90%;
  font-size: 24px;
  padding: 50px 20px 30px;
  border-bottom: 2px solid lightgray;
  margin: 0 auto;
}
</style>
