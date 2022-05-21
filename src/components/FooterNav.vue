<template>
  <footer>
    <div class="nav">
      <router-link to="/map">아파트</router-link> |
      <router-link to="/about">관심매물</router-link> |
      <router-link to="/board">게시판</router-link>
    </div>
    <div class="info">
      <div class="text">
        <p>(주)해피하우스</p>
        <p>대표 : 강민서, 심영효</p>
        <p>주소 : 서울특별시 강남구 역삼동 테헤란로 212</p>
      </div>
      <img src="../assets/img/logo_happyhouse.png" alt="" />
    </div>
    <div class="copy">Copyright © 2022 강민서, 심영효 All rights reserved.</div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  background-color: #e9e8e6;
  color: #353535;
  font-size: 14px;
}

footer a {
  color: #353535;
}

.nav {
  border-bottom: 1px solid gray;
  padding: 15px 20px;
}

.nav a:hover {
  color: black;
  font-weight: bold;
}
.info {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.info .text p {
  margin: 5px 0;
}

.info img {
  width: 110px;
  margin: 20px;
}

.copy {
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
}
</style>
