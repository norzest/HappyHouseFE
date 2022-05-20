import { apiInstance } from "./index.js";

const api = apiInstance();

async function join(member, success, fail) {
  await api
    .post(`/member/regist`, JSON.stringify(member))
    .then(success)
    .catch(fail);
}

async function login(id, password, success, fail) {
  await api
    .get(`/member/login`, {
      params: {
        id: id,
        password: password,
      },
    })
    .then(success)
    .catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/member/info/${userid}`).then(success).catch(fail);
}

export { join, login, findById };
