import { apiInstance } from "@/api/index.js";

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

async function memberModify(member, success, fail) {
  await api
    .put(`/member/modify`, JSON.stringify(member))
    .then(success)
    .catch(fail);
}

async function memberDelete(id, password, success, fail) {
  await api
    .delete(`/member/delete`, {
      params: {
        id: id,
        password: password,
      },
    })
    .then(success)
    .catch(fail);
}

async function searchId(id, success, fail) {
  await api.get(`/member/find/${id}`).then(success).catch(fail);
}

async function passwordSearch(info, success, fail) {
  await api.post(`/api/mail`, JSON.stringify(info)).then(success).catch(fail);
}

async function passwordChange(info, success, fail) {
  await api
    .put(`/member/modifypwd`, JSON.stringify(info))
    .then(success)
    .catch(fail);
}

export {
  join,
  login,
  findById,
  memberModify,
  memberDelete,
  passwordSearch,
  searchId,
  passwordChange,
};
