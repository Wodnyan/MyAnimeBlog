import { API_ENDPOINT } from "../../constants";

export const getAllPosts = async () => {
  const res = await fetch(`${API_ENDPOINT}/posts`);
  return res.json();
};

export const getAllPostIds = async () => {
  const res = await fetch(`${API_ENDPOINT}/posts`);
  const posts = await res.json();

  return posts.map((post: any) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getOnePost = async (id: number) => {
  const res = await fetch(`${API_ENDPOINT}/posts/${id}/`);
  return await res.json();
};
