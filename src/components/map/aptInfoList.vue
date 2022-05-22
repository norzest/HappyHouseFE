<template>
  <div class="aptListContainer">
    <apt-info-item
      v-for="(apt, index) in apts"
      :key="index"
      v-bind="apt"
    ></apt-info-item>
  </div>
</template>

<script>
import aptInfoItem from "@/components/map/item/aptInfoItem.vue";
import { mapState } from "vuex";

const aptStore = "aptStore";

export default {
  name: "aptInfoList",
  components: {
    aptInfoItem,
  },
  computed: {
    ...mapState(aptStore, ["apts"]),
  },
};
</script>

<style></style>
