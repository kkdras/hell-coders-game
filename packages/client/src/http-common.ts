import axios from "axios";
import { CUSTOM_BASE_URL, YANDEX_BASE_URL } from "./shared/consts";

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const mainAxios = axios.create({
  baseURL: YANDEX_BASE_URL
});

const forumAxios = axios.create({
  baseURL: CUSTOM_BASE_URL
});

export {
  mainAxios,
  forumAxios
};
