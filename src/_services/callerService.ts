import axios from "axios";

const Axios = axios.create({
  baseURL: "https://tyradex.tech/api/v1/",
});

export default Axios;
