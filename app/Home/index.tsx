import React, {useEffect, useState} from "react";
import cls from "./home.module.css";
import PostComponent from "@/components/Post";
import {PLang} from "@/components";
import {useGetAllPosts} from "@/hook";
import {customAxios} from "@/api";
import {useAuth} from "@/context";
import {Post} from "@/types";
import {useReactionMutate} from "@/hook/useReaction";

const HomePage = () => {
  const {selected} = useAuth();

  const {data: posts} = useGetAllPosts();

  let filtered = selected?.id
    ? posts?.filter((el) =>
      el.PostCategory[0].category.id.includes(selected?.id)
    )
    : posts;

  const reactionAction = useReactionMutate();

  const handleLike = (id: string) => {
    reactionAction.mutate({id, type: "like"})
  };

  const handleDislike = (id: string) => {
    reactionAction.mutate({id, type: "dislike"})
  };


  return (
    <div className="container">
      <div className={cls["wrapper"]}>
        <div className={cls["p"]}>
          <p>Discover the coding world</p>
        </div>
        <PLang/>
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
