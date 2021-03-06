export interface Post {
  id: number;
  title: string;
  createdAt: string;
  description: string;
  body: string;
  author: string;
  bannerImgUrl: string;
  teaserImgUrl: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}
