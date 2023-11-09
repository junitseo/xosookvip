import { API_URL } from "../app/@function/wsCode";

export async function getPosts(limit, skip) {
  try {
    const res = await fetch(`${API_URL}/posts?limit=${limit}&skip=${skip}&status=public`);
    if(res.ok){
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
  }
}

export async function getPostBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/posts/${slug}`);
    if(res.ok){
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
  }
}