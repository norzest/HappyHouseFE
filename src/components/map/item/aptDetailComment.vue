<template>
  <div>
    <div>
      <input type="text" class="input" />
      <button @click="registComment">입력</button>
    </div>
    <div>
      <apt-detail-comment-item></apt-detail-comment-item>
    </div>
  </div>
</template>

<script>
import aptDetailCommentItem from "@/components/map/item/aptDetailCommentItem.vue";
import { mapState, mapActions } from "vuex";
const aptCommentStore = "aptCommentStore";

export default {
  components: { aptDetailCommentItem },
  name: "aptDetailComment",
  computed: {
    ...mapState(aptCommentStore, ["aptComment"]),
  },
  methods: {
    ...mapActions(aptCommentStore, ["getAptCommentList"]),
    registComment() {
      this.getAptCommentList("11110000000001");
      console.log(this.aptComment);
    },
  },
};
</script>

<style></style>
