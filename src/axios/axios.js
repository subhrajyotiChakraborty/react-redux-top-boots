import axios from "axios";

const instance = axios.create({
  baseURL: "./data/data.json",
});

export default instance;
