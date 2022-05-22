<template>
  <div>
    <board-choice></board-choice>
    <router-view></router-view>
  </div>
</template>

<script>
import BoardChoice from "@/components/board/BoardChoice.vue";
export default {
  name: "BoardView",
  components: {
    BoardChoice,
  },
};
</script>

<style></style>
