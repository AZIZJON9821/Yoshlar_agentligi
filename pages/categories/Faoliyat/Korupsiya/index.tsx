"use client";

import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import image from "./images/korupsiya.jpg"; // <== rasmni shu joyga joylashtirasiz

const AboutAgencyPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* === Tepa rasm === */}
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt="O‘zbekiston Respublikasi Korrupsiyaga qarshi kurash agentligi binosi"
            className={styles.image}
            priority
          />
        </div>

        <h1 className={styles.title}>
          O‘zbekiston Respublikasi Korrupsiyaga qarshi kurash agentligi
        </h1>

        <div className={styles.content}>
          <p>
            O‘zbekiston Respublikasi Korrupsiyaga qarshi kurash agentligi —
            korrupsiyaga qarshi kurashish bo‘yicha davlat siyosatini amalga
            oshiruvchi maxsus vakolatli davlat organi hisoblanadi. Agentlikning
            asosiy vazifasi korrupsiyaning oldini olish, unga qarshi tizimli
            chora-tadbirlarni ishlab chiqish hamda davlat organlari faoliyatida
            shaffoflikni ta’minlashdir.
          </p>

          <p>
            Agentlik tomonidan qabul qilingan qarorlar davlat organlari,
            tashkilotlar va fuqarolar uchun majburiy hisoblanadi. Agentlik
            yuridik shaxs maqomiga ega bo‘lib, o‘z muhr va blankalari, shaxsiy
            g‘azna hisobvaraqlari hamda mustaqil balansiga ega.
          </p>

          <p>
            Agentlikning markaziy apparati, hududiy boshqarmalari va boshqa
            tuzilmalari mavjud bo‘lib, ular korrupsiyaga qarshi chora-tadbirlarni
            hududlarda samarali amalga oshirishni ta’minlaydi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAgencyPage;
