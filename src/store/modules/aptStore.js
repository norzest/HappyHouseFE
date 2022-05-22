import { aptList } from "@/api/apt.js";

const aptStore = {
  namespaced: true,
  state: {
    apts: [],
    apt: null,
  },

  getters: {},
  mutations: {
    SET_APT_LIST: (state, apts) => {
      state.apts = apts;
    },
    SET_DETAIL_APT: (state, apt) => {
      state.apt = apt;
    },
  },

  actions: {
    getAptList: ({ commit }, dym) => {
      const params = {
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
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_APT", apt);
    },
  },
};

export default aptStore;
