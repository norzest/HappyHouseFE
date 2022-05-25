import { aptList, interestedAptList } from "@/api/apt.js";

const aptStore = {
  namespaced: true,
  state: {
    apts: [],
    apt: {
      apartmentName: null,
      juso: null,
      aptCode: null,
    },
    followapts: [],
  },

  getters: {},
  mutations: {
    SET_APT_LIST: (state, apts) => {
      state.apts = apts;
    },
    SET_DETAIL_APT: (state, apt) => {
      state.apt = apt;
    },
    SET_FOLLOW_APT_LIST: (state, apts) => {
      state.followapts = apts;
    },
  },

  actions: {
    getAptList: ({ commit }, dym) => {
      const params = {
        sidoCode: dym.sidoCode,
        gugunCode: dym.gugunCode,
        dongCode: dym.dongCode,
        year: dym.year,
        month: dym.month,
        apartmentName: dym.apartmentName,
      };
      aptList(
        params,
        (response) => {
          //console.log(response.data);
          commit("SET_APT_LIST", response.data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    detailApt: ({ commit }, apt) => {
      commit("SET_DETAIL_APT", apt);
    },
    getFollowAptList: ({ commit }, params) => {
      interestedAptList(
        params,
        (response) => {
          commit("SET_FOLLOW_APT_LIST", response.data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
};

export default aptStore;
