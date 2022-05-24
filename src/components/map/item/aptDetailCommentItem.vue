<template>
  <div class="commentitem">
    <div class="userid">
      <span>{{ writerId }}</span>
      <span class="date">{{ createdAt }}</span>
    </div>
    <textarea v-show="isUpdate" v-model="newContent"></textarea>
    <div v-show="!isUpdate" class="commenttext">{{ content }}</div>
    <button v-show="isU" @click="updateAptComment">수정</button>
    <button v-show="isUpdate" @click="updateCancel">취소</button>
    <span v-show="!isUpdate">
      <button v-show="isU" @click="deleteAptComment">삭제</button>
    </span>
  </div>
</template>

<script>
import { updateAptComment, deleteAptComment } from "@/api/aptcomment.js";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "aptDetailCommentItem",
  props: {
    commentId: String,
    writerId: String,
    createdAt: String,
    content: String,
  },
  data() {
    return {
      isU: false,
      isUpdate: false,
      newContent: "",
    };
  },
  mounted() {
    this.isYou();
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    isYou() {
      if (this.writerId == this.userInfo.id) {
        this.isU = true;
      } else {
        this.isU = false;
      }
    },
    updateCancel() {
      this.newContent = "";
      this.isUpdate = false;
    },
    updateAptComment() {
      if (this.isUpdate) {
        const params = {
          commentId: this.commentId,
          content: this.newContent,
        };
        updateAptComment(params);
        this.isUpdate = false;
      } else {
        this.isUpdate = true;
      }
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
