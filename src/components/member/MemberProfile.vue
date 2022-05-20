<template>
  <div>
    {{ userInfo.id }}
  </div>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
};
</script>

<style></style>
