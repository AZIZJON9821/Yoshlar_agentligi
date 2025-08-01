import React, { useEffect, useState } from "react";
import cls from './profile.module.css';
import Action from "@/components/actions";
import { DislikeIcon, LikeIcon, UserIcon } from "./icons";
import Button from "@/components/button";
import { useUserPosts, useUserReactions } from "@/hook";
import { useRouter } from "next/router";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reactions'>('posts');
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const { data: userPosts = [] } = useUserPosts();
  const { data: userReactions = [] } = useUserReactions();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("User JSON parsing error:", error);
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    }
  }, []);

  if (!user) return null; 

  return (
    <div className="container">
      <div className={cls['profile-header']}>
        <div className={cls['profile-avatar']}>
          <UserIcon />
        </div>
        <div className={cls['profile-info']}>
          <div className="username">{user.username}</div>
          {user.email && <div className="email">{user.email}</div>}
        </div>
      </div>

      <div className={cls.tabs}>
        <div className={cls.actions}>
          <button
            className={`${cls.tab} ${activeTab === 'posts' ? cls.active : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            My posts
          </button>
          <button
            className={`${cls.tab} ${activeTab === 'reactions' ? cls.active : ''}`}
            onClick={() => setActiveTab('reactions')}
          >
            My reactions
          </button>
        </div>
        <hr />
      </div>

      <div className={cls["posts-list"]}>
        {activeTab === 'posts' && userPosts.map((post) => (
          <div key={post.id} className={cls["post-card"]}>
            <div className={cls["post-header"]}>
              {post.title} | <span>#js</span>
            </div>
            <div style={{ width: '843px', height: '148px', marginBottom: '14px', backgroundColor: '#ffffff' }}>{post.code}</div>
            <div className={cls["post-footer"]}>
              <div className={cls["action-buttons"]}>
                <button className="like-button"><LikeIcon /></button>
                <button className="dislike-button"><DislikeIcon /></button>
                <Button style={{ width: '83px', height: '25px', borderRadius: '4px' }}>Comments</Button>
              </div>
              <div className={cls["author-info"]}>
                <span>By</span> <span className="author-name">Anonymus</span><span>,</span>
                <span className="post-date">{post.createdAt || "Unknown date"}</span>
              </div>
            </div>
          </div>
        ))}

        {activeTab === 'reactions' && userReactions.map((reaction) => (
          <div key={reaction.id} className={cls["post-card"]}>
            <div className={cls["post-header"]}>
              ❤️ You reacted to this post | <span>#js</span>
            </div>
            <div style={{ width: '843px', height: '148px', marginBottom: '14px', backgroundColor: '#ffffff' }}>{reaction.Post.code}</div>
            <div className={cls["post-footer"]}>
              <div className={cls["action-buttons"]}>
                <button className="like-button"><LikeIcon /></button>
                <button className="dislike-button"><DislikeIcon /></button>
                <Button style={{ width: '83px', height: '25px', borderRadius: '4px' }}>Comments</Button>
              </div>
              <div className={cls["author-info"]}>
                <span>By</span> <span className="author-name">Anonymus</span><span>,</span>
                <span className="post-date">{reaction.createdAt || "Unknown date"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
