<template>
  <div class="first">
    <div id="searchBar">
      <input type="text" v-model="apartmentName" class="input" />
      <button @click="searchApt">검색</button>
    </div>
    <div class="checkbar">
      <div class="toggle" @click="toggleClick" :class="{ off: trigger }"></div>
      <div class="bar" :class="{ barkk: trigger }">
        <div class="row">
          <div class="area">
            <div class="col">
              <select
                class="form-select"
                v-model="sidoCode"
                @change="gugunList"
              >
                <option
                  v-for="sido in sidos"
                  :key="sido.value"
                  :value="sido.value"
                >
                  {{ sido.text }}
                </option>
              </select>
            </div>
            <div class="col">
              <select
                class="form-select"
                v-model="gugunCode"
                @change="dongList"
              >
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
                <option
                  v-for="dong in dongs"
                  :key="dong.value"
                  :value="dong.value"
                >
                  {{ dong.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="other">
            <div class="col">
              <select class="form-select" v-model="year">
                <option v-for="y in yearOption" :key="y.value" :value="y.value">
                  {{ y.text }}
                </option>
              </select>
            </div>
            <div class="col">
              <select class="form-select" v-model="month">
                <option
                  v-for="m in monthOption"
                  :key="m.value"
                  :value="m.value"
                >
                  {{ m.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button @click="searchApt" class="aptsearchbtn">조회하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const localStore = "localStore";
const aptStore = "aptStore";

export default {
  name: "LocalBar",
  data() {
    return {
      year: null,
      month: null,
      yearOption: [
        { text: "년도", value: null },
        { text: "2015년", value: 2015 },
        { text: "2016년", value: 2016 },
        { text: "2017년", value: 2017 },
        { text: "2018년", value: 2018 },
        { text: "2019년", value: 2019 },
        { text: "2020년", value: 2020 },
        { text: "2021년", value: 2021 },
        { text: "2022년", value: 2022 },
      ],
      monthOption: [
        { text: "월", value: null },
        { text: "1월", value: 1 },
        { text: "2월", value: 2 },
        { text: "3월", value: 3 },
        { text: "4월", value: 4 },
        { text: "5월", value: 5 },
        { text: "6월", value: 6 },
        { text: "7월", value: 7 },
        { text: "8월", value: 8 },
        { text: "9월", value: 9 },
        { text: "10월", value: 10 },
        { text: "11월", value: 11 },
        { text: "12월", value: 12 },
      ],
      apartmentName: null,
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      tr: false,
    };
  },
  computed: {
    ...mapState(localStore, ["sidos", "guguns", "dongs"]),
    ...mapState(aptStore, ["apts"]),
    trigger() {
      return this.tr;
    },
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_DONG_LIST();
    this.getSido();
    this.apt = this.$route.params.aptname;
  },
  methods: {
    ...mapActions(localStore, ["getSido", "getGugun", "getDong"]),
    ...mapActions(aptStore, ["detailApt", "getAptList"]),
    ...mapMutations(localStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
    ]),

    gugunList() {
      console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.CLEAR_DONG_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode.substring(0, 2));
    },
    dongList() {
      console.log(this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode.substring(0, 5));
    },
    searchApt() {
      const a = {
        apartmentName: null,
        juso: null,
      };
      this.detailApt(a);

      const dym = {
        dongCode: this.dongCode,
        year: this.year,
        month: this.month,
        apartmentName: this.apartmentName,
      };
      this.getAptList(dym);
    },
    toggleClick() {
      this.tr = !this.tr;
    },
  },
};
</script>

<style scoped>
#searchBar {
  width: 320px;
  text-align: center;
  padding: 20px 10px;
  border-bottom: 1px solid #996a54;
}
#searchBar input {
  height: 30px;
  width: 70%;
}
#searchBar button {
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}
.checkbar {
  position: fixed;
  top: 70px;
  left: 310px;
  display: flex;
}
.toggle {
  width: 50px;
  height: 50px;
  background: url("../../assets/img/open.png");
  background-size: 100%;
  border-radius: 25px;
  margin: 25px;
  cursor: pointer;
  transition: 1s;
}

.bar {
  background-color: #f3f2f0;
  border: 2px solid #996a54;
  display: flex;
  position: relative;
  align-items: center;
  top: 25px;
  left: -10px;
  border-radius: 10px;
  transition: 1s;
  opacity: 0;
  padding: 0 20px;
}
.bar select {
  height: 30px;
  margin: 5px;
  border-radius: 5px;
}
.aptsearchbtn {
  background-color: #996a54;
  color: white;
  border: none;
  height: 30px;
  border-radius: 5px;
  margin-left: 15px;
  cursor: pointer;
}

.area {
  display: flex;
}
.other {
  display: flex;
}
.off {
  transform: rotate(180deg);
}
.barkk {
  opacity: 1;
}
</style>
