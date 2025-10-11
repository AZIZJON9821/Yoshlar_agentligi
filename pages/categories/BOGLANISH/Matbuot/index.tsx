"use client"

import styles from "./index.module.css"
import Image from "next/image"

import person3 from "./images/image3.png"
import person1 from "./images/image1.png"
import person2 from "./images/image2.png"


const leaders = [


  {
    id: 4,
    name: "Abdullayev Murodjon Shamsiddin o'g'li",
    mahalla: "Piskent tumani Yoshlar ishlari bo'limi Matbuot xizmati rahbari",
    // phone: "+998 50 998 99 80",
    img: person1,
  },

  {
    id: 5,
    name: "Ro'ziyev Azamat Olimjon o'g'li",
    mahalla: "Piskent tumani Yoshlar ishlari bo'limi Matbuot xizmati operatori",
    // phone: "+998 50 998 99 80",
    img: person2,
  },
  




]

export default function RahbariyatPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title} >MATBUOT XIZMATI </h1>
      <div className={styles.cards}>
        {leaders.map((leader) => (
          <div key={leader.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={leader.img} alt={leader.name} width={100} height={100} />
            </div>
            <div className={styles.info}>
              <h3>{leader.name}</h3>
              <p>{leader.mahalla}</p>
              {/* <p>{leader.phone}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
