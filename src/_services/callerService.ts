import axios from "axios";

const Axios = axios.create({
  baseURL: "https://tyradex.app/api/v1/",
});

export default Axios;
