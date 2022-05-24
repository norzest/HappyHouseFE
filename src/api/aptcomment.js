import { apiInstance } from "./index.js";

const api = apiInstance();

function aptCommentList(params, success, fail) {
  api
    .get(`/aptcomment/comment`, {
      params: {
        aptCode: params.aptCode,
      },
    })
    .then(success)
    .catch(fail);
}

export { aptCommentList };
