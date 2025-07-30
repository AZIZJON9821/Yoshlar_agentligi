import React from "react";
import NavbarLayout from "../Navbar";
import FooterLaout from "../Footer";
import styles from "./main.module.css";
import { OnlyChildrenProps } from "@/types";

const MainLayout = ({ children }: OnlyChildrenProps) => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className="">
        <NavbarLayout />
        {children}
      </div>
      <FooterLaout />
    </div>
  );
};

export default MainLayout;
