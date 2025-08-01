import { useEffect, useState } from "react";
import UserIcon from "./icons/user.icon";
import styles from "./Modal.module.css";
import { leaveComment, getAllComments } from "@/api";
import Cookies from "js-cookie";

interface CommentsModalProps {
  onClose: () => void;
  postId: string | number;
}

interface CommentType {
  id: number;
  message: string;
  userName?: string;
  createdAt?: string;
}

const CommentsModal = ({ onClose, postId }: CommentsModalProps) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<CommentType[]>([]);

  const userId = Cookies.get("userId");
  console.log("bu userid", userId);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await getAllComments(postId);
      setComments(res);
    };
    fetchComments();
  }, [postId]);

  const handlePost = async () => {
    const trimmed = commentText.trim();
    if (!trimmed || !userId) return;

    const res = await leaveComment({
      postId,
      message: trimmed,
      userId: "",
    });

    if (res) {
      const updated = await getAllComments(postId);
      setComments(updated);
      setCommentText("");
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.nav}>
          <h2>Comments</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.commentList}>
            {comments.length === 0 ? (
              <p className={styles.noComments}>There is no comments yet...</p>
            ) : (
              comments.map((item, index) => (
                <div className={styles.commentItem} key={item.id || index}>
                  <UserIcon width={24} height={24} className={styles.icon} />
                  <div className={styles.commentText}>
                    <h4>{item.userName || "Anonymous"}</h4>
                    <p>{item.message}</p>
                    {item.createdAt && (
                      <span className={styles.time}>
                        {new Date(item.createdAt).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.inputSection}>
            <textarea
              placeholder="Type your comment here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handlePost}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
