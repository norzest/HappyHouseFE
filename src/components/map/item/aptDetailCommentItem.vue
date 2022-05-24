<template>
  <div class="commentitem">
    <div class="userid">
      <span>{{ writerId }}</span>
      <span class="date">{{ createdAt }}</span>
    </div>
    <div class="commenttext">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "aptDetailCommentItem",
  props: {
    writerId: String,
    createdAt: String,
    content: String,
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
