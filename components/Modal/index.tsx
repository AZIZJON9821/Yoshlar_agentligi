import UserIcon from "./icons/user.icon";
import styles from "./Modal.module.css";

const CommentsModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.nav}>
        <h2>Comments</h2>
        <button className={styles.closeBtn}>×</button>
      </div>
      <div className={styles.body}>
        <div className={styles.commentList}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className={styles.commentItem} key={index}>
              <UserIcon width={24} height={24}  className={styles.icon}/>
              <div className={styles.commentText}>
                <h4>Anonymous</h4>
                <p>
                  Example comment text here about the code that written by someone...
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.inputSection}>
          <textarea placeholder="Type your comment here..." />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
