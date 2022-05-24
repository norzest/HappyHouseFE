<template>
  <div>
    <div class="inputbox">
      <textarea
        name="comment"
        id="comment"
        v-model="myAptComment"
        cols="30"
        rows="4"
      ></textarea>
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
import { registAptComment } from "@/api/aptcomment.js";
import aptDetailCommentItem from "@/components/map/item/aptDetailCommentItem.vue";
import { mapState, mapActions } from "vuex";
const aptStore = "aptStore";
const memberStore = "memberStore";
const aptCommentStore = "aptCommentStore";

export default {
  components: { aptDetailCommentItem },
  name: "aptDetailComment",
  data() {
    return {
      myAptComment: "",
    };
  },
  computed: {
    ...mapState(aptStore, ["apt"]),
    ...mapState(aptCommentStore, ["aptComment"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  watch: {
    apt: function () {
      this.getAptCommentList(this.apt.aptCode);
    },
  },
  created() {
    this.getAptCommentList(this.apt.aptCode);
  },
  methods: {
    ...mapActions(aptCommentStore, ["getAptCommentList"]),
    registComment() {
      const params = {
        aptCode: this.apt.aptCode,
        content: this.myAptComment,
        writerId: this.userInfo.id,
      };
      registAptComment(params);
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
