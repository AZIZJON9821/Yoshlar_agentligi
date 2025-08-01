import React from "react";
import cls from "./home.module.css";
import PostComponent from "@/components/Post";
import { PLang } from "@/components";

const HomePage = () => {
  const handleLike = (id: string | number) => {
    console.log("Like:", id);
  };

  const handleDislike = (id: string | number) => {
    console.log("Dislike:", id);
  };
  return (
    <div className="container">
      <div className={cls["p"]}>
        <p>Discover the coding world</p>
      </div>
      <PLang />
      <div className={cls["posts"]}>
        <PostComponent
          id={"2"}
          title="FizzBuzz"
          author="John Doe"
          code={`import React from "react";

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
        <pre>{code}</pre>
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
`}
          language="JavaScript"
          likes={42}
          dislikes={3}
          createdAt="2025-07-30"
          onLike={handleLike}
          onDislike={handleDislike}
        />
        <PostComponent
          id={"2"}
          title="FizzBuzz"
          author="John Doe"
          code={`import React from "react";

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
        <pre>{code}</pre>
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
`}
          language="JavaScript"
          likes={42}
          dislikes={3}
          createdAt="2025-07-30"
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
};
export default HomePage;
