"use client";

import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import image from "./image/building.png"; // Sizning agentlik rasmi

const AboutAgencyPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* === Tepa rasm === */}
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt="O‘zbekiston Respublikasi Yoshlar ishlari agentligi"
            className={styles.image}
            priority
          />
        </div>

        <h1 className={styles.title}>
          O‘zbekiston Respublikasi Yoshlar ishlari agentligi
        </h1>

        <div className={styles.content}>
          <p>
            O‘zbekiston Respublikasi Yoshlar ishlari agentligi yoshlarga oid
            davlat siyosatini yangi bosqichga olib chiqish, yoshlar sohasidagi
            muammolarga samarali yechim topish, ularni har tomonlama qo‘llab-quvvatlash,
            shuningdek vakolatli organlar faoliyatini samarali tashkil etish hamda
            muvofiqlashtirishni amalga oshiruvchi davlat tashkilotidir.
          </p>

          <p>
            Agentlikning qabul qilgan qarorlari davlat organlari, boshqa
            tashkilot va ularning mansabdor shaxslari, shuningdek, fuqarolar
            uchun bajarilishi majburiy hisoblanadi. Agentlik yuridik shaxs
            hisoblanib, o‘z nomi yozilgan va Davlat gerbi tasviri tushirilgan
            muhr va blankalarga, mustaqil balansga, shaxsiy g‘azna hisobvaraqlariga,
            bank hisobvaraqlariga ega.
          </p>

          <p>
            Agentlik tizimiga agentlikning markaziy apparati, hududiy va mahalliy
            bo‘linmalari, Yoshlar muammolarini o‘rganish va istiqbolli kadrlarni
            tayyorlash instituti kiradi. Hududiy bo‘linmalar (tumanlar va shaharlar
            bo‘limlari bundan mustasno) yuridik shaxs tashkil etgan holda faoliyat
            yuritadi. Yoshlar ishlari agentligi Prezidentning PF-6017-son Farmoni
            bilan tashkil etilgan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAgencyPage;
