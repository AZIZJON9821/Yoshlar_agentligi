"use client"

import styles from "./index.module.css"
import Image from "next/image"
import person1 from "./images/image1.png"
import person2 from "./images/image2.png"
import person3 from "./images/image3.png"
import person4 from "./images/image4.png"
import person5 from "./images/image5.png"

const leaders = [
  {
    id: 2,
    name: "Baxodir Rashidov",
    mahalla: "Tuman hokimining yoshlar siyosati, ma'naviy-ma'rifiy ishlar boʻyicha oʻrinbosari",
    phone: "+998 93 172 77 70",
    img: person2,
  },
  {
    id: 1,
    name: "Tursunboyev Tolibjon To'lqin o'g'li",
    mahalla: "Piskent tumani yoshlar ishlari bo'limi boshlig'i",
    phone: "+998 95 828 40 10",
    img: person1,
  },
  {
    id: 3,
    name: "Nazirov Doniyor Xolmurot o'g'li",
    mahalla: "Piskent tumani yoshlar ishlari bo'limi bosh mutaxassisi",
    phone: "+998 90 937 34 04",
    img: person3,
  },

]

export default function RahbariyatPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>RAHBARIYAT</h1>
      <div className={styles.cards}>
        {leaders.map((leader) => (
          <div key={leader.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={leader.img} alt={leader.name} width={100} height={100} />
            </div>
            <div className={styles.info}>
              <h3>{leader.name}</h3>
              <p>{leader.mahalla}</p>
              <p>{leader.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
