// HomePage.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import cls from "./home.module.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

const LIMIT = 10;

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Dummy test posts
  const dummyPosts: Post[] = [
    {
      id: 1,
      title: "Piskentda mahalla yoshlar yetakchilariga Prezident farmoni mazmuni tushuntirildi",
      description:
        "Piskent tumanida yoshlarga oid davlat siyosatini izchil amalga oshirish va ularning huquqiy savodxonligini oshirish maqsadida muhim yig‘ilish bo‘lib o‘tdi. Mazkur yig‘ilishda, Piskent tumani Yoshlar ishlari bo‘limi boshlig‘i Tolibjon To‘lqinovich mahalla yoshlar yetakchilariga, 163-sonli 'Mahallalarda yoshlar bilan ishlash tizimi samaradorligini oshirishga doir chora-tadbirlar toʻgʻrisida' Prezident Farmoni mazmun-mohiyatini batafsil tushuntirib berdi.",
      image: image1.src,
    },{
      id: 2,
      title: "Piskent tumani hokimi aholi bilan ochiq muloqot o‘tkazdi",
      description:
        "Piskent tumani hokimi Muzaffar Aripov Do‘ngqo‘rg‘on mahalla fuqarolar yig‘ini aholisi va faollari bilan uchrashib, ularga murojaat qildi.",
      image: image2.src,
    },
    {
      id: 3,
      title: "Mahallalarda faoliyat",
      description:
        "Bugun Piskent tumanida mahalla raislarining  “mahalla yettiligi” a’zolari faoliyatini samarali tashkil etish hamda ularning davlat organlari, jamoat tashkilotlari, xalq deputatlari kengashlari bilan o‘zaro hamkorligini tizimli yo‘lga qo‘yishdagi ustuvor vazifalariga bag`ishlangan o’quv -seminari bo’lib o’tdi. ",
      image: image3.src,
    },
    {
      id: 4,
      title: "Toshkent viloyatida “Besh tashabbus olimpiadasi” festivalining tadbir va loyihalari bo‘lib o‘tdi. ",
      description:
         "Erta tongdan 500 ming qadam loyihasi bilan boshlangan dastur shaxmat,  stol tennis va kurash musobaqalari hamda zakovat intellektual o‘yini bilan davom etmoqda. "
     ,
      image: image4.src,
    },
    
        ];

  useEffect(() => {
    // test uchun sahifa o‘zgarganda postlarni qo‘shamiz
    const newPosts = dummyPosts.slice((page - 1) * LIMIT, page * LIMIT);
    setAllPosts((prev) => [...prev, ...newPosts]);

    if (page * LIMIT >= dummyPosts.length) {
      setHasMore(false);
    }
  }, [page]);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, hasMore]);

  return (
    <div className="container">
      <div className={cls.wrapper}>
        <div className={cls.p}>
          <p>YANGILIKLAR</p>
        </div>

        <div className={cls.posts}>
          {allPosts.map((post) => (
            <div key={post.id} className={cls.card}>
              <img src={post.image} alt={post.title} className={cls.cardImage} />
              <div className={cls.cardContent}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div ref={loaderRef} style={{ padding: "20px", textAlign: "center" }}>
            <p>Loading more...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
