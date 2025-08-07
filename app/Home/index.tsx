import React, { useEffect, useRef, useState } from "react";
import cls from "./home.module.css";
import PostComponent from "@/components/Post";
import { PLang } from "@/components";
import { useAuth } from "@/context";
import { useGetAllPosts } from "@/hook";
import { useReactionMutate } from "@/hook/useReaction";
import { Post } from "@/types";

const LIMIT = 10;

const HomePage = () => {
  const { selected } = useAuth();
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading } = useGetAllPosts(page, LIMIT);

  const reactionAction = useReactionMutate();

  useEffect(() => {
    if (data?.posts) {
      setAllPosts((prev) => [...prev, ...data.posts]);

      const totalPages = data.pagination.totalPages;
      if (page >= totalPages) {
        setHasMore(false);
      }
    }
  }, [data, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore, isLoading]);

  const filtered = selected?.length
    ? allPosts.filter((post) =>
      post.PostCategory?.some((cat) =>
        selected.some((sel) => sel.id === cat.category.id)
      )
    )
    : allPosts;

  const handleLike = (id: string) => {
    reactionAction.mutate({ id, type: "like" });
  };

  const handleDislike = (id: string) => {
    reactionAction.mutate({ id, type: "dislike" });
  };

  return (
    <div className="container">
      <div className={cls["wrapper"]}>
        <div className={cls["p"]}>
          <p>Discover the coding world</p>
        </div>
        <PLang />

        {filtered?.length === 0 && <p>No codes yet ...</p>}

        <div className={cls["posts"]}>
          {filtered?.map((post,i) => (
            <PostComponent
              id={post.id}
              title={post.title}
              author={post.user.username}
              code={post.code}
              language={post.PostCategory[0]?.category.name || "Unknown"}
              likes={post.reactions.filter((el) => el.like).length || 0}
              dislikes={post.reactions.filter((el) => el.dislike).length || 0}
              createdAt={post.createdAt}
              onLike={() => handleLike(post.id)}
              onDislike={() => handleDislike(post.id)}
              key={post.id+i}
            />
          ))}
        </div>

        {hasMore && (
          <div ref={loaderRef} style={{ padding: "20px", textAlign: "center" }}>
            <p>Loading more...</p>
          </div>
        )}

        {!hasMore && <p style={{ textAlign: "center" }}>You reached the end.</p>}
      </div>
    </div>
  );
};

export default HomePage;
