import React from "react";
import styles from "./footer.module.css";

const FooterLaout = () => {
  return (
      <footer className="container">
      <div className={styles.footer}>
      <div className={styles.copyrightSection}>
        <span className={styles.copyrightText}>
          All rights reserved @ 2025
        </span>
      </div>
      </div>
    </footer>
  );
};

export default FooterLaout;
