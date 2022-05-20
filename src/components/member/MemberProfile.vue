<template>
  <div class="info">
    <div>아이디 : {{ userInfo.id }}</div>
    <div>이름 : {{ userInfo.name }}</div>
    <div>이메일 : {{ userInfo.email }}</div>
    <div>전화번호 : {{ userInfo.phone }}</div>
    <div>주소 : {{ userInfo.address }}</div>
    <router-link :to="{ name: 'memberModify' }">편집</router-link>
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

<style></style>
