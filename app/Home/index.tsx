import CommentsModal from "@/components/Modal";
import React from "react";
import cls from "./home.module.css";
import { Posts } from "@/components";
const HomePage = () => {
  return (
    <div className="container">
      <div className={cls["p"]}>
        <p>Discover the coding world</p>
      </div>
      {/* <CommentsModal/> */}
      {/* <Posts /> */}
    </div>
  );
};
export default HomePage;
