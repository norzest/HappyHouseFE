<template>
  <div class="list">
    <div class="title">게시판</div>
    <div class="contents">
      <div class="cnts">
        <div class="content">
          <p>안녕하세요 1</p>
          <p>22.01.11.</p>
        </div>
        <div class="content">
          <p>안녕하세요 2</p>
          <p>22.01.11.</p>
        </div>
        <div class="content">
          <p>안녕하세요 3</p>
          <p>22.01.11.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const aa = setInterval(function () {
//   this.$refs.cnts.style.display = "none";
// }, 3000);
// aa();
export default {};
</script>

<style scoped>
.list {
  width: 50%;
  height: 100px;
  border: 1px solid lightgray;
  padding: 10px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
}
.contents {
  margin: 20px 15px;
  height: 16px;
  overflow: hidden;
}
.cnts {
  transform: translateY(-32px);
}
.content {
  display: flex;
  justify-content: space-between;
}
</style>
