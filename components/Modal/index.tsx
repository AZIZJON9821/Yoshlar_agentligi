import { useState } from "react";
import UserIcon from "./icons/user.icon";
import styles from "./Modal.module.css";

const CommentsModal = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    "Example comment text here about the code that written by someone...",
    "Example comment text here about the code that written by someone...",
    "Example comment text here about the code that written by someone...",
    "Example comment text here about the code that written by someone...",
  ]);

  const handlePost = () => {
    const trimmed = commentText.trim();
    if (trimmed) {
      setComments([...comments, trimmed]);
      setCommentText("");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.nav}>
          <h2>Comments</h2>
          <button className={styles.closeBtn}>×</button>
        </div>
        <div className={styles.body}>
          <div className={styles.commentList}>
            {comments.map((text, index) => (
              <div className={styles.commentItem} key={index}>
                <UserIcon width={24} height={24} className={styles.icon} />
                <div className={styles.commentText}>
                  <h4>Anonymous</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
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
