<template>
  <div class="commentitem">
    <div class="userid">
      <span>{{ writerId }}</span>
      <span class="date">{{ createdAt }}</span>
    </div>
    <div class="commenttext">{{ content }}</div>
    <button @click="updateAptComment">수정</button>
    <button @click="deleteAptComment">삭제</button>
  </div>
</template>

<script>
import { updateAptComment, deleteAptComment } from "@/api/aptcomment.js";

export default {
  name: "aptDetailCommentItem",
  props: {
    commentId: String,
    writerId: String,
    createdAt: String,
    content: String,
  },
  methods: {
    updateAptComment() {
      const params = {
        commentId: this.commentId,
        content: this.content,
      };
      updateAptComment(params);
    },
    deleteAptComment() {
      const params = {
        commentId: this.commentId,
      };
      deleteAptComment(params);
    },
  },
};
</script>

<style scoped>
.commentitem {
  margin: 10px;
  padding: 10px;
}
.userid {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 14px;
}
.date {
  color: gray;
}
.commenttext {
  margin: 10px 0;
}
</style>
