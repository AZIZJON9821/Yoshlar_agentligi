import React from "react";
import cls from "./home.module.css";
import PostComponent from "@/components/Post";
import { PLang } from "@/components";
import { usePosts } from "@/context";

const HomePage = () => {
  const { posts, likePost, dislikePost, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="container">
        <div className={cls["p"]}>
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className={cls["p"]}>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* <PLang /> */}
      <div className={cls["p"]}>
        <p>Discover the coding world</p>
      </div>
      {posts.map((post) => (
        <PostComponent
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          code={post.code}
          language={post.language}
          likes={post.likes}
          dislikes={post.dislikes}
          createdAt={post.createdAt}
          onLike={likePost}
          onDislike={dislikePost}
        />
      ))}
    </div>
  );
};
export default HomePage;
