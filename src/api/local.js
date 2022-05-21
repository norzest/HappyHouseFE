import { apiInstance } from "@/api/index.js";

const api = apiInstance();

function sidoList(success, fail) {
  api.get(`/local/sido`).then(success).catch(fail);
}

function gugunList(sidoCode, success, fail) {
  api
    .get(`/local/gugun`, {
      params: sidoCode,
    })
    .then(success)
    .catch(fail);
}

function dongList(gugunCode, success, fail) {
  api
    .get(`/local/dong`, {
      params: gugunCode,
    })
    .then(success)
    .catch(fail);
}

export { sidoList, gugunList, dongList };
