import React, { useEffect, useState } from "react";
import cls from "./profile.module.css";
import { DislikeIcon, LikeIcon, UserIcon } from "./icons";
import Button from "@/components/button";
import { useUserPosts, useUserReactions } from "@/hook";
import { useRouter } from "next/router";
import PostComponent from "@/components/Post";
import { customAxios } from "@/api";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "reactions">("posts");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const { data: userPosts = [] } = useUserPosts();
  const { data: userReactions = [] } = useUserReactions();
  console.log(useUserReactions);
  
  console.log(userPosts);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("User JSON parsing error:", error);
          router.push("/auth/login");
        }
      } else {
        router.push("/auth/login");
      }
    }
  }, []);
  const handleLike = async (id: string | number) => {
    const data = { type: "like" };
    await customAxios.post(`/posts/${id}/reactions`, data);
  };

  const handleDislike = async (id: string | number) => {
    const data = { type: "dislike" };
    await customAxios.post(`/posts/${id}/reactions`, data);
  };
  if (!user) return null;

  return (
    <div className="container">
      <div className={cls["profile-header"]}>
        <div className={cls["profile-avatar"]}>
          <UserIcon />
        </div>
        <div className={cls["profile-info"]}>
          <div className="username">{user.username}</div>
          {user.email && <div className="email">{user.email}</div>}
        </div>
      </div>

      <div className={cls.tabs}>
        <div className={cls.actions}>
          <button
            className={`${cls.tab} ${activeTab === "posts" ? cls.active : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            My posts
          </button>
          <button
            className={`${cls.tab} ${activeTab === "reactions" ? cls.active : ""
              }`}
            onClick={() => setActiveTab("reactions")}
          >
            My reactions
          </button>
        </div>
        <hr />
      </div>

      <div className={cls["posts-list"]}>
        {activeTab === "posts" &&
          userPosts.map((post) => (
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

        {activeTab === "reactions" &&
          userReactions?.map((reaction) => (
            <PostComponent
              id={reaction.id}
              title={reaction.Post.title}
              author={reaction.Post.user.username}
              code={reaction.Post.code}
              language={reaction.Post.PostCategory[0].category.name|| "Unknown"}
              likes={reaction.like || 0}
              dislikes={reaction.dislike || 0}
              createdAt={reaction.createdAt}
              onLike={() => handleLike(reaction.id)}
              onDislike={() => handleDislike(reaction.id)}
              key={reaction.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
