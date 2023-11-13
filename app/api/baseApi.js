import { API_URL } from "@function/wsCode";
import axios from "axios";

const AxiosClient = axios.create({
  baseURL: API_URL
});

export default AxiosClient;