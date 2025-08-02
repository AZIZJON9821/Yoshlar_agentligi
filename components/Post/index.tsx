import React, { useState } from "react";
import { CopyBlock, github } from "react-code-blocks";

import LikeIcon from "./like.icon";
import DisLikeIcon from "./dislike.icon";
import Button from "../button";
import CommentsModal from "../Modal";
import cls from "./post.component.module.css";
import { CgPushChevronDownR, CgPushChevronUpR } from "react-icons/cg";

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
  const [showFull, setShowFull] = useState(false);

  const lines = code.split("\n");
  const visible = showFull ? code : lines.slice(0, 15).join("\n");
  const isLong = lines.length > 10;

  return (
    <div className={cls["post-container"]}>
      <div className={cls.title}>
        {title} | #{language}
      </div>
      <div className={cls["post-content"]}>
        <CopyBlock
          language={language.toLowerCase()}
          text={visible}
          theme={github}
          showLineNumbers
          copied={false ? true : undefined}
        />
        {isLong && (
          <button
            className={cls["toggle-button"]}
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? <CgPushChevronUpR /> : <CgPushChevronDownR />}
          </button>
        )}
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
          <p className={cls["author-name"]}>{author},</p>
          <p>
            {(() => {
              const date = new Date(createdAt);
              return (
                date.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }) +
                ", " +
                date.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
              );
            })()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
