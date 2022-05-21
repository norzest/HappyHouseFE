<template>
  <div>
    <div class="row">
      <div class="col">
        <select class="form-select" v-model="sidoCode" @change="gugunList">
          <option v-for="sido in sidos" :key="sido.value" :value="sido.value">
            {{ sido.text }}
          </option>
        </select>
      </div>
      <div class="col">
        <select class="form-select" v-model="gugunCode" @change="dongList">
          <option
            v-for="gugun in guguns"
            :key="gugun.value"
            :value="gugun.value"
          >
            {{ gugun.text }}
          </option>
        </select>
      </div>
      <div class="col">
        <select class="form-select" v-model="dongCode">
          <option v-for="dong in dongs" :key="dong.value" :value="dong.value">
            {{ dong.text }}
          </option>
        </select>
      </div>
    </div>
    <div>
      <button>조회하기</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const localStore = "localStore";

export default {
  name: "LocalBar",
  data() {
    return {
      year: null,
      month: null,
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
    };
  },
  computed: {
    ...mapState(localStore, ["sidos", "guguns", "dongs"]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.getSido();
  },
  methods: {
    ...mapActions(localStore, ["getSido", "getGugun", "getDong"]),
    ...mapMutations(localStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
    ]),

    gugunList() {
      console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode.substring(0, 2));
    },
    dongList() {
      console.log(this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode.substring(0, 5));
    },
  },
};
</script>

<style></style>
