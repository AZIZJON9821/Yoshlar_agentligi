import React from "react";
import cls from "./navbar.module.css";
import PlusIcon from "../../app/Profile/icons/plus.icon";
import SettingsIcon from "../../app/Profile/icons/settings.icon";
import UserIcon from "../../app/Profile/icons/user.icon";
import Action from "@/components/actions";

const NavbarLayout = () => {
  return (
    <div className="container">
    <div className={cls.header}>
      <div className={cls.title}>Code museum</div>

      <div className={cls['header-actions']}>
        <Action mode="light"><PlusIcon /></Action>
        <Action mode="light"><SettingsIcon /></Action>
        <Action mode="dark"><UserIcon /></Action>
      </div>
    </div>
    </div>
  );
};

export default NavbarLayout;
