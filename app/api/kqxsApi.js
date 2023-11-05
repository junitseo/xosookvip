import AxiosClient from "./baseApi";

export const getKqxsMb = async (day) => {
  try {
    const res = await AxiosClient.get(`/kqxs/xsmb/${day}`);
    return res.data.resultObj[0] || null;
  } catch (error) {
    return error; 
  }
}
export const getKqxsMn = async (day) => {
  try {
    const res = await AxiosClient.get(`/kqxs/xsmn/${day}`);
    return res.data.resultObj;
  } catch (error) {
    return error; 
  }
}
export const getKqxsMt = async (day) => {
  try {
    const res = await AxiosClient.get(`/kqxs/xsmt/${day}`);
    return res.data.resultObj;
  } catch (error) {
    return error; 
  }
}
export const getKqxsProvince = async (provinceId, day) => {
  try {
    const res = await AxiosClient.get(`/kqxs/xsTinh`, { params: { day, provinceId } });
    return res.data;
  } catch (error) {
    return error; 
  }
}