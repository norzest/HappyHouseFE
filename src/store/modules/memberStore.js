import jwt_decode from "jwt-decode";
import { login, findById, memberModify, memberDelete } from "@/api/member.js";

const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user.id,
        user.pwd,
        (response) => {
          if (response.data.message === "success") {
            let token = response.data["access-token"];
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            sessionStorage.setItem("access-token", token);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        () => {},
      );
    },
    getUserInfo({ commit }, token) {
      let decode_token = jwt_decode(token);
      findById(
        decode_token.userid,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_USER_INFO", response.data.userInfo);
          } else {
            console.log("유저 정보 없음");
          }
        },
        (error) => {
          console.log(error);
        },
      );
    },
    async userModify({ commit }, user) {
      memberModify(
        user,
        (response) => {
          commit("SET_USER_INFO", response.data.userInfo);
        },
        () => {},
      );
    },
    async userDelete({ commit }, user) {
      await memberDelete(
        user.id,
        user.password,
        (response) => {
          if (response.data.message === "success") {
            let token = response.data["access-token"];
            commit("SET_USER_INFO", null);
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", false);
            sessionStorage.removeItem("access-token", token);
          } else {
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        () => {},
      );
    },
    userLogout({ commit }) {
      sessionStorage.removeItem("access-token");
      commit("SET_USER_INFO", null);
      commit("SET_IS_LOGIN", false);
      commit("SET_IS_LOGIN_ERROR", false);
    },
  },
};

export default memberStore;
