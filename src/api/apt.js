import { apiInstance } from "./index.js";

const api = apiInstance();

function aptList(params, success, fail) {
  api
    .get(`/getApt/dongApt`, {
      params: {
        dongCode: params.dongCode,
        year: params.year,
        month: params.month,
      },
    })
    .then(success)
    .catch(fail);
}

export { aptList };
