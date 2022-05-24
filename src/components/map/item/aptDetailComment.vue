<template>
  <div>
    <div class="inputbox">
      <textarea name="comment" id="comment" cols="30" rows="4"></textarea>
      <button @click="registComment">작성</button>
    </div>
    <div class="commentlist">
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

<style>
.inputbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
