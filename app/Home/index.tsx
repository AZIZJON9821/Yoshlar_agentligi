import React from "react";
import cls from "./home.module.css";
import PostComponent from "@/components/Post";
import { PLang } from "@/components";
import { useGetAllPosts } from "@/hook";
import { customAxios } from "@/api";
import { useAuth } from "@/context";

const HomePage = () => {
  const { selected } = useAuth();


  const { data: posts } = useGetAllPosts();

  let filtered = selected?.length
  ? posts?.filter((post) =>
      post.PostCategory?.some((cat) =>
        selected?.some((sel) => sel.id ==  cat.category.id)
      )
    )
  : posts;

  const handleLike = async (id: string | number) => {
    const data = { type: "like" };
    await customAxios.post(`/posts/${id}/reactions`, data);
  };

  const handleDislike = async (id: string | number) => {
    const data = { type: "dislike" };
    await customAxios.post(`/posts/${id}/reactions`, data);
  };

  return (
    <div className="container">
      <div className={cls["wrapper"]}>
        <div className={cls["p"]}>
          <p>Discover the coding world</p>
        </div>
        <PLang />
        <div className={cls["posts"]}>
          {filtered?.map((post) => (
            <PostComponent
              id={post.id}
              title={post.title}
              author={post.user.username}
              code={post.code}
              language={post.PostCategory[0].category.name || "Unknown"}
              likes={post.reactions[0]?.like || 0}
              dislikes={post.reactions[0]?.dislike || 0}
              createdAt={post.createdAt}
              onLike={() => handleLike(post.id)}
              onDislike={() => handleDislike(post.id)}
              key={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
