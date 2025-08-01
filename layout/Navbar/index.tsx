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
          <Action mode="light">
            <Link href={"/posts/add"}>
              <PlusIcon />
            </Link>
          </Action>
          <Action mode="light">
            <SettingsIcon />
          </Action>
          <Action mode="dark">
            <Link href={"/profile"}>
              <UserIcon />
            </Link>
          </Action>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;