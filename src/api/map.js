import { mapInstance } from "@/api/index.js";

const api = mapInstance();

function callByDongCode(dongCode, year, month, success, fail) {
  api
    .get(`/getApt/dongApt`, {
      params: {
        dongCode: dongCode,
        year: year,
        month: month,
      },
    })
    .then(success)
    .catch(fail);
}

export { callByDongCode };
