import { apiInstance } from "./index.js";

const api = apiInstance();

function aptList(params, success, fail) {
  api
    .get(`/apt/dongApt`, {
      params: {
        sidoCode: params.sidoCode,
        gugunCode: params.gugunCode,
        dongCode: params.dongCode,
        year: params.year,
        month: params.month,
        apartmentName: params.apartmentName,
      },
    })
    .then(success)
    .catch(fail);
}

function interestedAptList(params, success, fail) {
  api
    .get(`/apt/followApt?memberId=${params.memberId}`)
    .then(success)
    .catch(fail);
}

function registInterestedAptList(params, success, fail) {
  api
    .post(
      `/apt/followApt?memberId=${params.memberId}&aptCode=${params.aptCode}`,
    )
    .then(success)
    .catch(fail);
}

function deleteInterestedAptList(params, success, fail) {
  api
    .delete(
      `/apt/followApt?memberId=${params.memberId}&aptCode=${params.aptCode}`,
    )
    .then(success)
    .catch(fail);
}

export {
  aptList,
  interestedAptList,
  registInterestedAptList,
  deleteInterestedAptList,
};
