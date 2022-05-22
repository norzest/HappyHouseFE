<template>
  <div>
    <div class="imsi_img"></div>
    <div class="imsi_interested"></div>
    <div>
      <p>{{ aptName }}</p>
      <p>{{ dong }} {{ roadName }} {{ jibun }}</p>
      <p>{{ dealAmount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "aptInfoItem",
  props: {
    aptName: String,
    dong: String,
    roadName: String,
    jibun: String,
    dealAmount: String,
  },
};
</script>

<style></style>
