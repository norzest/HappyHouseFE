import { apiInstance } from "@/api/index.js";

const api = apiInstance();

function listArticle(pg, key, word, boardType, success, fail) {
  api
    .get(`/board/list`, {
      params: {
        pg: pg,
        key: key,
        word: word,
        boardType: boardType,
      },
    })
    .then(success)
    .catch(fail);
}

function hitCounter(id, success, fail) {
  api.post(`/board/hit?id=${id}`).then(success).catch(fail);
}

function boardDetail(id, success, fail) {
  api.get(`/board/detail?id=${id}`).then(success).catch(fail);
}

function boardRegister(article, success, fail) {
  api.post(`board/write`, JSON.stringify(article)).then(success).catch(fail);
}

function boardModify(article, success, fail) {
  api
    .put(`/board/detail/${article.id}`, JSON.stringify(article))
    .then(success)
    .catch(fail);
}

function boardDelete(id, success, fail) {
  api.delete(`/board/detail/${id}`).then(success).catch(fail);
}

export {
  listArticle,
  hitCounter,
  boardDetail,
  boardRegister,
  boardModify,
  boardDelete,
};
