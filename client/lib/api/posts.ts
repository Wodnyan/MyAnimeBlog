import { API_ENDPOINT } from "../../constants";
import axios from "axios";

const POSTS_ENDPOINT = `${API_ENDPOINT}/posts/`

export const getAllPosts = async () => {
  const res = await fetch(POSTS_ENDPOINT);
  return res.json();
};

export const getAllPostIds = async () => {
  const res = await fetch(POSTS_ENDPOINT);
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
  const res = await fetch(`${POSTS_ENDPOINT}${id}`);
  return res.json();
};

export const createPost = async (
  title: string,
  description: string,
  body: string,
  teaserImg: string,
  bannerImg: string
) => {
  return axios.post(API_ENDPOINT, {
    title: string,
    description: string,
    body: string,
    teaserImg: string,
    bannerImg: string
  })
};
