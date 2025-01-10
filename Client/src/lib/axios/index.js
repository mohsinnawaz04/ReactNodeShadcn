import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:8000/api/v1",
});

instance.defaults.timeout = 3000;

export { instance };
