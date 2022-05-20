import { apiInstance } from "@/api/index.js";

const api = apiInstance();

function listArticle(pg, key, word, boardType, success, fail) {
  api
    .get(`/board`, {
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

export { listArticle };
