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
    getAptList: ({ commit }, dongCode) => {
      const params = {
        dongCode: dongCode,
        year: "2021", // 나중에 추가
        month: "07", // 나중에 추가
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
