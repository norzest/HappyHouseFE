import { apiInstance } from "@/api/index.js";

const api = apiInstance();

function getSido(success, fail) {
  api.get(`/local/sido`).then(success).catch(fail);
}

function getGuGun(sidoCode, success, fail) {
  api
    .get(`/local/gugun`, {
      params: {
        sidoCode: sidoCode,
      },
    })
    .then(success)
    .catch(fail);
}

function getDong(gugunCode, success, fail) {
  api
    .get(`/local/dong`, {
      params: {
        gugunCode: gugunCode,
      },
    })
    .then(success)
    .catch(fail);
}

export { getSido, getGuGun, getDong };
