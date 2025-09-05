// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // tena ilaina ho an'ny cookie
});

export const getCsrfCookie = async () => {
  await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
    withCredentials: true,
  });
};
export default api;