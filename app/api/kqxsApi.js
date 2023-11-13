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
    console.log(error.message);
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


export const getResultTomorrow = async (date) => {
  try {
    const res = await AxiosClient.get(`/kqxs/getResultTomorrow?date=${date}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}

export const getSpecialPrizeStatistics = async (year) => {
  try {
    const res = await AxiosClient.get(`/kqxs/getSpecialPrizeStatistics?year=${year}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}
export const getSpecialPrizeStatisticsDayOfWeek = async (year) => {
  try {
    const res = await AxiosClient.get(`/kqxs/getSpecialPrizeStatisticsDayOfWeek?year=${year}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}

export const getSpecialStatisticsGan = async (date, type) => {
  try {
    const res = await AxiosClient.get(`/kqxs/getSpecialStatisticsGan?date=${date}&type=${type}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}

export const getSpecialPrizeStatisticsDayOfWeek2 = async (startDate, endDate) => {
  try {
    const res = await AxiosClient.get(`/kqxs/getSpecialPrizeStatisticsDayOfWeek2?startDate=${startDate}&endDate=${endDate}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}
export const getStatisticFrequency = async (startDate, endDate, prizeId = 1) => {
  try {
    const res = await AxiosClient.get(`/kqxs/getStatisticFrequency?startDate=${startDate}&endDate=${endDate}&prizeId=${prizeId}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}
export const getStatisticTwoNumber = async (startDate, endDate, loto = "00") => {
  try {
    const res = await AxiosClient.get(`/kqxs/getStatisticTwoNumber?startDate=${startDate}&endDate=${endDate}&loto=${loto}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}
export const getStatisticList = async (startDate, endDate, lotos="00,11,22,33,44,55,66,77,88,01") => {
  try {
    const res = await AxiosClient.get(`/kqxs/getStatisticList?startDate=${startDate}&endDate=${endDate}&lotos=${lotos}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}
export const getStatisticTwoNumberByDayOfWeek = async (startDate, endDate, daysOfWeek = "") => {
  try {
    const res = await AxiosClient.get(`/kqxs/getStatisticTwoNumberByDayOfWeek?startDate=${startDate}&endDate=${endDate}&daysOfWeek=${daysOfWeek}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}