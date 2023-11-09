import { API_URL } from "../app/@function/wsCode";

export async function getPerpetualCalendar(date) {
  try {
    const res = await fetch(`${API_URL}/perpetualCalendar/getPerpetualCalendar/${date}`);
    if(res.ok){
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
  }
}