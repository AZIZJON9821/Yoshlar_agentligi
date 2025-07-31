import CommentsModal from "@/components/Modal";
import React from "react";
import cls from "./home.module.css";
const HomePage = () => {
  return (
    <div className="container">
      <div className={cls["p"]}>
        <p>Discover the coding world</p>
      </div>
      {/* <CommentsModal/> */}
    </div>
  );
};

export default HomePage;
