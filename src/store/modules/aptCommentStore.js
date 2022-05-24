import { aptCommentList } from "@/api/aptcomment.js";

const aptCommentStore = {
  namespace: true,
  state: {
    aptComment: null,
  },
  getters: {},
  mutations: {
    SET_APT_COMMENT_LIST: (state, comments) => {
      state.aptComment = comments;
    },
  },
  actions: {
    getAptCommentList: ({ commit }, aptCode) => {
      const params = {
        aptCode: aptCode,
      };
      aptCommentList(
        params,
        (response) => {
          //console.log(response.data);
          commit("SET_APT_COMMENT_LIST", response.data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
};

export default aptCommentStore;
