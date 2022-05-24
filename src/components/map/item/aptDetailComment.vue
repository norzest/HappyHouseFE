<template>
  <div>
    <div class="inputbox">
      <textarea name="comment" id="comment" cols="30" rows="4"></textarea>
      <button @click="registComment">작성</button>
    </div>
    <div class="commentlist">
      <apt-detail-comment-item
        v-for="comment of aptComment"
        :key="comment.commentId"
        v-bind="comment"
      ></apt-detail-comment-item>
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
  // watch: {
  //   aptComment() {
  //     this.getAptCommentList("11110000000001");
  //   },
  // },
  created() {
    this.getAptCommentList("11110000000001");
  },
  methods: {
    ...mapActions(aptCommentStore, ["getAptCommentList"]),
    registComment() {},
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
