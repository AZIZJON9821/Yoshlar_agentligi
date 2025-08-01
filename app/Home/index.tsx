import React from "react";
import cls from "./home.module.css";
import PostComponent from "@/components/Post";
import { PLang } from "@/components";
import { useGetAllPosts } from "@/hook";
import { customAxios } from "@/api";

const HomePage = () => {
  const handleLike = (id: string | number) => {
    const data = { type: "like" };
    customAxios.post(`/posts/${id}/reactions`, data);
  };

  const handleDislike = (id: string | number) => {
    const data = { type: "dislike" };
    customAxios.post(`/posts/${id}/reactions`, data);
  };
  const { data: posts } = useGetAllPosts();

  return (
    <div className="container">
      <div className={cls["wrapper"]}>
        <div className={cls["p"]}>
          <p>Discover the coding world</p>
        </div>
        <PLang />
        <div className={cls["posts"]}>
          {posts?.map((post) => (
            <PostComponent
              id={post.id}
              title={post.title}
              author={post.user.username}
              code={post.code}
              language={post.PostCategory[0].category.name}
              likes={post?.likes?.length}
              dislikes={1}
              createdAt={post.createdAt}
              onLike={handleLike}
              onDislike={handleDislike}
              key={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
