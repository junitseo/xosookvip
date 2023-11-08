import AxiosClient from "./baseApi";

export const getPosts = async (limit = 5) => {
  try {
    const res = await AxiosClient.get(`/posts?limit=${limit}`);
    return res.data.datas
  } catch (error) {
    return error; 
  }
}
export const getPostBySlug = async (slug) => {
  try {
    const res = await AxiosClient.get(`/posts/${slug}`);
    return res.data;
  } catch (error) {
    return error; 
  }
}