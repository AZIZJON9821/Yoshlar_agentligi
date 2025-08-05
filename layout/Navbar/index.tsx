import React from "react";
import cls from "./navbar.module.css";
import PlusIcon from "../../app/Profile/icons/plus.icon";
import SettingsIcon from "../../app/Profile/icons/settings.icon";
import UserIcon from "../../app/Profile/icons/user.icon";
import Action from "@/components/actions";
import Link from "next/link";

const NavbarLayout = () => {
  return (
    <div className="container">
      <div className={cls.header}>
        <div className={cls.title}>
          <Link href={"/"}>Code museum</Link>
        </div>

        <div className={cls["header-actions"]}>
          <Link href={"/posts/add"}>
            <Action mode="light">
              <PlusIcon />
            </Action>
          </Link>
          <Action mode="light">
            <SettingsIcon />
          </Action>
          <Link href={"/profile"}>
            <Action mode="dark">
              <UserIcon />
            </Action>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;