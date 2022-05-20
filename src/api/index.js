import axios from "axios";
import { API_BASE_URL, KAKAO_MAP_URL } from "@/config";

function apiInstance() {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

function mapInstance() {
  const instance = axios.create({
    baseURL: KAKAO_MAP_URL,
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

export { apiInstance, mapInstance };
