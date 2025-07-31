import React from "react";
import NavbarLayout from "../Navbar";
import FooterLaout from "../Footer";
import styles from "./main.module.css";
import { OnlyChildrenProps } from "@/types";
import { useRouter } from "next/router";


const MainLayout = ({ children }: OnlyChildrenProps) => {
  const { pathname } = useRouter()

  return (
    <div className={styles["main-wrapper"]}>
      <div className="">
        {pathname !== '/auth/login' && pathname !== '/auth/register' ? <NavbarLayout /> : null}
        {children}
      </div>
      {pathname !== '/auth/login' && pathname !== '/auth/register' ? <FooterLaout /> : null}
    </div>
  );
};

export default MainLayout;
