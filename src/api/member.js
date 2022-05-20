import { apiInstance } from "./index.js";

const api = apiInstance();

async function join(user, success, fail) {
  console.log(JSON.stringify(user));
  await api
    .post(`/member/regist`, JSON.stringify(user))
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
