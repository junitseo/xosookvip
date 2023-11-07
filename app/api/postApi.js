import AxiosClient from "./baseApi";

export const getPosts = async () => {
  try {
    const res = await AxiosClient.get(`/posts`);
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