import { mapInstance } from "@/api/index.js";

const api = mapInstance();

function newsCrawl(success, fail) {
  api.get(`/crawl`).then(success).catch(fail);
}

export { newsCrawl };
