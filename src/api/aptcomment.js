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

function registAptComment(params, success, fail) {
  api
    .post(`/aptcomment/comment`, {
      params: {
        aptCode: params.aptCode,
        writerId: params.writerId,
        content: params.content,
      },
    })
    .then(success)
    .catch(fail);
}

function updateAptComment(params, success, fail) {
  api
    .post(`/aptcomment/comment`, {
      params: {
        commentId: params.commentId,
        content: params.content,
      },
    })
    .then(success)
    .catch(fail);
}

function deleteAptComment(params, success, fail) {
  api
    .delete(`/aptcomment/comment`, {
      params: {
        aptCode: params.aptCode,
        writerId: params.writerId,
        content: params.content,
      },
    })
    .then(success)
    .catch(fail);
}

export { aptCommentList, registAptComment, updateAptComment, deleteAptComment };
