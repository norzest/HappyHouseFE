<template>
  <div class="search">
    <input
      type="text"
      v-model="apartmentName"
      class="input"
      @keyup.enter="searchApt"
    />
    <button @click="searchApt">
      <img src="../../assets/img/search.png" alt="" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const aptStore = "aptStore";
export default {
  data() {
    return {
      apartmentName: "",
    };
  },
  methods: {
    ...mapActions(aptStore, ["getAptList"]),
    searchApt() {
      const dym = {
        dongCode: this.dongCode,
        year: this.year,
        month: this.month,
        apartmentName: this.apartmentName,
      };
      this.$router.push(`/map/${this.apartmentName}`);
      this.getAptList(dym);
    },
  },
};
</script>

<style scoped>
.search {
  background-color: #c6957f;
  height: 80px;
  width: 80%;
  display: flex;
  border-radius: 5px;
}
.search input {
  margin: 15px;
  margin-right: 0;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 0 20px;
}
.search input:focus {
  outline: none;
}
.search button {
  border: none;
  background-color: transparent;
}
.search img {
  width: 30px;
  position: relative;
}
.search button {
  margin: 15px;
}
</style>
