import React, { useState } from "react";
import { CopyBlock, github } from "react-code-blocks";

import LikeIcon from "./like.icon";
import DisLikeIcon from "./dislike.icon";
import Button from "../button";
import CommentsModal from "../Modal";
import cls from "./post.component.module.css";

interface PostProps {
  id: string | number;
  title: string;
  author: string;
  code: string;
  language: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  onLike: (id: string | number) => void;
  onDislike: (id: string | number) => void;
}

const PostComponent = ({
  id,
  title,
  author,
  code,
  language,
  likes,
  dislikes,
  createdAt,
  onLike,
  onDislike,
}: PostProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={cls["post-container"]}>
      <div className={cls.title}>
        {title} | #{language}
      </div>
      <div className={cls["post-content"]}>
        <CopyBlock
          language={language.toLowerCase()}
          text={code}
          theme={github}
          showLineNumbers
          copied={false}
        />
      </div>
      <div className={cls["post-footer"]}>
        <div>
          <button className={cls.btn} onClick={() => onLike(id)}>
            <LikeIcon />
            {likes}
          </button>
          <button className={cls.btn} onClick={() => onDislike(id)}>
            <DisLikeIcon />
            {dislikes}
          </button>
          <Button
            children={"Comments"}
            style={{
              width: "83px",
              height: "25px",
              borderRadius: "4px",
              marginLeft: "13px",
            }}
            onClick={() => setModalOpen(true)}
          />

          {modalOpen && (
            <CommentsModal postId={id} onClose={() => setModalOpen(false)} />
          )}
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
