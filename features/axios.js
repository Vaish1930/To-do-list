import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://192.168.18.6:80/api",
});

export default instance;
