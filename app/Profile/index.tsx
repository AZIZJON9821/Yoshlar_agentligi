import React, { useState } from "react";
import cls from './profile.module.css';
import Action from "@/components/actions";
import { DislikeIcon, LikeIcon, PlusIcon, SettingsIcon, UserIcon } from "./icons";
import Button from "@/components/button";
import { useAuth } from "@/context";
// import { usePosts } from "@/context";
import { useRouter } from "next/router";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reactions'>('posts');
  const { user, logout, isAuthenticated } = useAuth();
  const { getUserPosts, likePost, dislikePost } = usePosts();
  const router = useRouter();

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  const userPosts = user ? getUserPosts(user.id) : [];

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <div className="container">
      <div className={cls['profile-header']}>
        <div className={cls['profile-avatar']}>
          <UserIcon />
        </div>
        <div className={cls['profile-info']}>
          <div className="username">@{user?.username}</div>
          <div className="email">{user?.email}</div>
          <button onClick={handleLogout} style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>
            Logout
          </button>
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
        {activeTab === 'posts' && (
          userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div key={post.id} className={cls["post-card"]}>
                <div className={cls["post-header"]}>{post.title} | <span>#{post.language}</span></div>
                <div style={{ width: '843px', height: '148px', marginBottom: '14px', backgroundColor: '#ffffff', padding: '10px', overflow: 'auto' }}>
                  <pre style={{ margin: 0, fontSize: '12px' }}>{post.code}</pre>
                </div>
                <div className={cls["post-footer"]}>
                  <div className={cls["action-buttons"]}>
                    <button className="like-button" onClick={() => likePost(post.id)}>
                      <LikeIcon />
                    </button>
                    <button className="dislike-button" onClick={() => dislikePost(post.id)}>
                      <DislikeIcon />
                    </button>
                    <Button style={{ width: '83px', height: '25px', borderRadius: '4px' }}>Comments</Button>
                  </div>
                  <div className={cls["author-info"]}>
                    <span>By</span> <span className="author-name">{post.author}</span><span>,</span>
                    <span className="post-date">{new Date(post.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>No posts yet. Create your first post!</p>
            </div>
          )
        )}

        {activeTab === 'reactions' && (
          <div className={cls["post-card"]}>
            <div className={cls["post-header"]}>❤️ You reacted to this post | <span>#react</span></div>
            <div style={{ width: '843px', height: '148px', marginBottom: '14px', backgroundColor: '#ffffff' }} ></div>
            <div className={cls["post-footer"]}>
              <div className={cls["action-buttons"]}>
                <button className="like-button"><LikeIcon /></button>
                <button className="dislike-button"><DislikeIcon /></button>
                <Button style={{ width: '83px', height: '25px', borderRadius: '4px' }}>Comments</Button>
              </div>
              <div className={cls["author-info"]}>
                <span>By</span> <span className="author-name">Another author</span><span>,</span>
                <span className="post-date">2025-07-20 16:12:00</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
