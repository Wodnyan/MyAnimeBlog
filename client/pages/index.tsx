import { useEffect, useState } from "react";
import BlogHeader from "../components/BlogHeader/BlogHeader";
import Header from "../components/Header/Header";
import BlogPostGrid from "../components/BlogPostGrid/BlogPostGrid";
import { Post } from "../types";
import { getAllPosts } from "../lib/api/posts";
import { getProfileData } from "../lib/api/auth";
import { connect, useDispatch } from "react-redux";
import { addUser } from "../redux/user/actions";
import { ActionTypes } from "../redux/user/actionTypes";

interface Props {
  posts: Post[] | [];
}

const Home: React.FC<Props> = ({ posts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProfileData();
        dispatch(addUser(data.user));
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <BlogHeader />
      <BlogPostGrid posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await getAllPosts();
    const posts = res.map((post: any) => {
      return {
        id: post.id,
        createdAt: post.created_at,
        title: post.title,
        description: post.description,
        body: post.body,
        author: post.author || "Test",
        bannerImgUrl: post.banner_image_url,
        teaserImgUrl: post.teaser_image_url,
      };
    });
    return {
      props: {
        posts,
      },
    };
  } catch (error) {}
};

//export default Home;
export default connect(null, {
  addUser,
})(Home);
