import axios from "axios";

const AxiosClient = axios.create({
  baseURL: 'http://localhost:8022/api/v1'
});

export default AxiosClient;