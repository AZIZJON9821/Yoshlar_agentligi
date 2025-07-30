import React from "react";
import cls from './profile.module.css';
import Action from "@/components/actions";
import CodeEditor from "@/components/code-editor";
import { DislikeIcon, LikeIcon, PlusIcon, SettingsIcon, UserIcon } from "./icons";
import Button from "@/components/button";

const Profile = () => {
  return (
    <div className="container">
      <div className={cls.header}>
        <div className={cls.title}>Code museum</div>

        <div className={cls['header-actions']}>
          <Action mode="light"><PlusIcon /></Action>
          <Action mode="light"><SettingsIcon /></Action>
          <Action mode="dark"><UserIcon /></Action>
        </div>
      </div>
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
          <button className={`${cls.tab} ${cls.active}`}>My posts</button>
          <button className={cls.tab}>My reactions</button>
        </div>
        <hr />
      </div>
      <div className={cls["posts-list"]}>

        {
          [...Array(3)].map(() => (
            <div className={cls["post-card"]}>
              <div className={cls["post-header"]}>Get rectangle area | <span>#js</span></div>

              <CodeEditor style={{ width: '843px', height: '148px', marginBottom: '14px' }} />

              <div className={cls["post-footer"]}>
                <div className={cls["action-buttons"]}>
                  <button className="like-button">
                    <LikeIcon />
                  </button>
                  <button className="dislike-button">
                    <DislikeIcon />
                  </button>
                  <Button style={{ width: '83px', height: '25px', borderRadius: '4px' }}>Comments</Button>
                </div>

                <div className={cls["author-info"]}>
                  <span>By</span> <span className="author-name">Author name</span><span>,</span>
                  <span className="post-date">2025-05-09 12:56:55</span>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
};

export default Profile;
