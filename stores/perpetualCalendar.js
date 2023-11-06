import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8022/api/v1',
})

export const getPerpetualCalendar = async (date) => {
    try {
      const res = await AxiosInstance.get(`/perpetualCalendar/getPerpetualCalendar/${date}`);
      return res.data;
    } catch (error) {
      return error; 
    }
}