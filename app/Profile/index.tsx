import React, { useState } from "react";
import cls from './profile.module.css';
import Action from "@/components/actions";
import { DislikeIcon, LikeIcon, PlusIcon, SettingsIcon, UserIcon } from "./icons";
import Button from "@/components/button";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reactions'>('posts');

  return (
    <div className="container">
      <div className={cls['profile-header']}>
        <div className={cls['profile-avatar']}>
          <UserIcon />
        </div>
        <div className={cls['profile-info']}>
          <div className="username">@username</div>
          <div className="email">example@email.com</div>
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
          [...Array(3)].map((_, i) => (
            <div key={i} className={cls["post-card"]}>
              <div className={cls["post-header"]}>Get rectangle area | <span>#js</span></div>
              <div style={{ width: '843px', height: '148px', marginBottom: '14px',backgroundColor:'#ffffff' }} ></div>
              <div className={cls["post-footer"]}>
                <div className={cls["action-buttons"]}>
                  <button className="like-button"><LikeIcon /></button>
                  <button className="dislike-button"><DislikeIcon /></button>
                  <Button style={{ width: '83px', height: '25px', borderRadius: '4px' }}>Comments</Button>
                </div>
                <div className={cls["author-info"]}>
                  <span>By</span> <span className="author-name">Author name</span><span>,</span>
                  <span className="post-date">2025-05-09 12:56:55</span>
                </div>
              </div>
            </div>
          ))
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
