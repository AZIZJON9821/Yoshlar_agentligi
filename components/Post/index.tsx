import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

import cls from "./PostComponet.module.css";
import LikeIcon from "./like.icon";
import DisLikeIcon from "./dislike.icon";
import Button from "../button";

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
  return (
    <div className={cls["post-container"]}>
      <div className={cls.title}>
        {title} | #{language}
      </div>
      <div className={cls["post-content"]}>
        <SyntaxHighlighter
          language={language}
          style={coy}
          wrapLines
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
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
          <Button children={"Comments"} className={cls["btn-comments"]} />
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
