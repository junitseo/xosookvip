import axios from "axios";
import { API_URL } from "../app/@function/wsCode";

const AxiosInstance = axios.create({
  baseURL: `${API_URL}/api/v1`,
})

export const getPerpetualCalendar = async (date) => {
    try {
      const res = await AxiosInstance.get(`/perpetualCalendar/getPerpetualCalendar/${date}`);
      return res.data;
    } catch (error) {
      return error; 
    }
}