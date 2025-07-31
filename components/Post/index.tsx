import React from "react";

import cls from "./PostComponet.module.css";
import LikeIcon from "./like.icon";
import DisLikeIcon from "./dislike.icon";

interface PostProps {
  title: string;
  author: string;
  code: string;
  language: string;
  likes: number;
  dislikes: number;
  createdAt: string;
}

const PostComponent = ({
  title,
  author,
  code,
  language,
  likes,
  dislikes,
  createdAt,
}: PostProps) => {
  return (
    <div className={cls["post-container"]}>
      <div className={cls.title}>
        {title} | #{language}
      </div>
      <div className={cls["post-content"]}>
        <pre>{code}</pre>
      </div>
      <div className={cls["post-footer"]}>
        <div>
          <button className={cls.btn}>
            <LikeIcon />
            {likes}
          </button>
          <button className={cls.btn}>
            <DisLikeIcon />
            {dislikes}
          </button>
          <button>Comments</button>
        </div>
        <div className={cls["post-author"]}>
          <p>{author},</p>
          <p>{new Date(createdAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
