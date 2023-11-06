import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8022/api/v1',
})

export const getPosts = async (limit, skip) => {
    try {
      const res = await AxiosInstance.get(`/posts?limit=${limit}&skip=${skip}&status=public`);
      return res.data;
    } catch (error) {
      return error; 
    }
}

export const getPostBySlug = async (slug) => {
    try {
      const res = await AxiosInstance.get(`/posts/${slug}`);
      return res.data;
    } catch (error) {
      return error; 
    }
}