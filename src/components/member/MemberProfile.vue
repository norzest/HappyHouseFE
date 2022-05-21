<template>
  <div class="infoform">
    <div class="infobox">
      <div class="infotitle">
        <img src="../../assets/img/logo_happyhouse.png" alt="" />
      </div>
      <div class="info">
        <div>
          <p class="title">아이디</p>
          <p class="text">{{ userInfo.id }}</p>
        </div>
        <div>
          <p class="title">이름</p>
          <p class="text">{{ userInfo.name }}</p>
        </div>
        <div>
          <p class="title">전화번호</p>
          <p class="text">{{ userInfo.phone }}</p>
        </div>
        <div>
          <p class="title">이메일</p>
          <p class="text">{{ userInfo.email }}</p>
        </div>
        <div>
          <p class="title">주소</p>
          <p class="text">{{ userInfo.address }}</p>
        </div>
      </div>
      <div class="btnset">
        <router-link :to="{ name: 'memberModify' }" class="btn"
          >편집</router-link
        >
        <router-link :to="{ name: 'memberDelete' }" class="btn"
          >회원탈퇴</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
};
</script>

<style scoped>
.infoform {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

.infobox {
  background-color: #f3f2f0;
  padding: 20px 50px 70px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 392px;
}

.infotitle {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
}

.infotitle img {
  width: 130px;
}
.info {
  padding-left: 5px;
}
.btn {
  display: inline-block;
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 20px;
  background-color: #996a54;
  color: white;
  font-weight: bold;
  line-height: 30px;
  padding: 0 10px;
  vertical-align: middle;
  margin-right: 10px;
}

.title {
  font-size: 14px;
  margin: 5px;
}
.text {
  font-weight: 700;
  margin: 10px 15px 20px;
}
.btnset {
  display: flex;
  justify-content: center;
}
</style>
