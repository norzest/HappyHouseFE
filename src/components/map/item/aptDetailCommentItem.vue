<template>
  <div class="commentitem">
    <div class="userid">
      <span>asdf****</span>
      <span class="date">22.05.24.</span>
    </div>
    <div class="commenttext">테스트 댓글</div>
  </div>
</template>

<script>
export default {
  name: "aptDetailCommentItem",
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
