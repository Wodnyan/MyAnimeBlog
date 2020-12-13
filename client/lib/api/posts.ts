import { API_ENDPOINT } from "../../constants";

export const getAllPosts = async () => {
  const res = await fetch(`${API_ENDPOINT}/posts`);
  return res.json();
};
