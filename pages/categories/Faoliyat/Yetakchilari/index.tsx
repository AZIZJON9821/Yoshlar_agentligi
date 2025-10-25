"use client"

import styles from "./index.module.css"
import Image from "next/image"

import person3 from "./images/image3.png"
import person4 from "./images/image4.png"
import person5 from "./images/image5.png"
import person6 from "./images/image6.png"
import person7 from "./images/image7.png"
import person8 from "./images/image8.png"
import person9 from "./images/image9.png"
import person10 from "./images/image10.png"
import person11 from "./images/image11.png"
import person12 from "./images/image12.png"
import person13 from "./images/image13.png" 
import person14 from "./images/image14.png"
import person15 from "./images/image15.png"
 import person16 from "./images/image16.png"

import person17 from "./images/image17.png"
import person18  from "./images/image18.png"
import person19 from "./images/image19.png"
import person20 from "./images/image20.png"
import person21 from "./images/image21.png"
import person22 from "./images/image22.png"

import person23 from "./images/image23.png"
import person24 from "./images/image24.png"
import person25 from "./images/image25.png"


const leaders = [
  {
    id: 3,
    name: "Ibodullayev Sardorjon Egamberdi o‘g‘li",
    mahalla: "Fayzobod MFY Yoshlar yetakchisi",
    phone: "+998 99 401 39 92", //
    img: person3,
  },

  {
    id: 4,
    name: "Abdullayev Murodjon Shamsiddin o'g'li",
    mahalla: "Lolaariq MFY Yoshlar yetakchisi",
    phone: "+998 50 998 99 80", //
    img: person4,
  },

  {
    id: 5,
    name: "Abdujalolov Abdurahmon Abdusalom o‘g‘li",
    mahalla: "Oybek MFY Yoshlar yetakchisi",
    phone: "+998 95 828 30 80", //
    img: person5,
  },
  {

    id: 6,
    name: "Abdurakhimov Odiljon Adkham o‘g‘li",
    mahalla: "Mo'minobod MFY Yoshlar yetakchisi",
    phone: "+998 95 828 50 10", //
    img: person6,
  },

  {
    id: 7,
    name: "Inomjonov Ilhomjon Ibrohim o‘g‘li",
    mahalla: "Yangiobod MFY Yoshlar yetakchisi",
    phone: "+998 95 898 12 99", //
    img: person7,
  }
  ,
  {
    id: 8,
    name: "Jilqiboev Valikhan Baxodirovich",
    mahalla: "Oqtepa MFY Yoshlar yetakchisi",
    phone: "+998 99 980 14 97", //
    img: person8,
  }
  ,
  {
    id: 9,
    name: "Abdug‘aniyev Shoxrux Abdug‘ofur o‘g‘li",
    mahalla: "Mustaqillik MFY Yoshlar yetakchisi",
    phone: "+998 99 491 94 20", //
    img: person9,
  }

  ,
  {
    id: 10,
    name: "Zoyirxonov Bexzodxon Ravshonxon o‘g‘li",
    mahalla: "Mitan Kadr",
    phone: "+998 95 828 60 30",//
    img: person10,
  },

  {
    id: 11,
    name: "Qayumov Xudoyor Baxtiyor o'g'li",
    mahalla: "Guliston MFY Yoshlar yetakchisi",
    phone: "+998 95 828 40 30",//
    img: person11,
  },
  {
    id: 12,
    name: "Qilichev Doston Raximberdi o'g'li",
    mahalla: "Ko'l otar MFY Yoshlar yetakchisi",
    phone: "+998 95 828 30 90",//
    img: person12,
  },

  {
    id: 13,
    name: "Axmedov Dadamurod Ne'matjon o'g'li",
    mahalla: "Oqtom MFY Yoshlar yetakchisi",
    phone: "+998 97 874 20 00",//
    img: person13,
  }

  ,{
    id: 14,
    name: "Abdusalomov Toxir Shovkat o‘g‘li",
    mahalla: "Birlik MFY Yoshlar yetakchisi",
    phone: "+998 95 828 10 60",//
    img: person14,
  }
  ,
  {
    id: 15,
    name: "Abduraximov Abrorjon Shuxrat o‘g‘li",
    mahalla: "Mingtepa MFY Yoshlar yetakchisi",
    phone: "+998 95 828 30 50", //
    img: person15,
  },
  {
    id:16,
    name: "Xasanov Baxrom Baxtiyor o‘g‘li",
    mahalla: "Chimqo‘rg‘on MFY Yoshlar yetakchisi",
    phone: "+998 99 768 40 90",//
    img: person16,
  },{
    id: 17,
    name: "Muzaffarxonov Ziyovuddinxon Zaynilobiddin o’g’li",
    mahalla: "Saidobod MFY Yoshlar yetakchisi",
    phone: "+998 95 828 40 60", //
    img: person17,
  },
  {
    id: 18,
    name: "Qo‘chqorov Zahriddin Jumanazar o‘g‘li",
    mahalla: "Taraqqiyot MFY Yoshlar yetakchisi",
    phone: "+998 99 467 60 99", //
    img: person18,
  },
  { 
    id:19,
    name: "Adasova Asal Umirzoq qizi",
    mahalla: "G'ayrat MFY Yoshlar yetakchisi",
    phone: "+998 95 828 90 10", //
    img: person19,
  }

  ,{
    id:20,
    name: "Tulqin ov Axror Muzaffar o‘g‘li",
    mahalla: "Donqorg‘on MFY Yoshlar yetakchisi",
    phone: "+998 95 828 50 30", //
    img: person20,
  },
  {
    id:21,
    name: "Yakubova Shaxlo Sheraliyevna",
    mahalla: "Bekobod MFY Yoshlar yetakchisi",
    phone: "+998 95 828 50 80", //
    img: person21,
  }
  ,
  {
      id:22,
    name: "Raxmonova Saida Ikramjanovna",
    mahalla: "Do'stlik MFY Yoshlar yetakchisi",
    phone: "+998 94 925 14 03", //
    img: person22,
  },
  {    id: 23,
    name: "Dehkonova Aziza Sodig‘jon qizi",
    mahalla: "Kultepa MFY Yoshlar yetakchisi",
    phone: "+998 94 214 29 90", //
    img: person23,
  },

  {    id: 24,
    name: "Yuldashev Sarvar Jamoliddin o'g'li",
    mahalla: "Muratali MFY Yoshlar yetakchisi",
    phone: "+998 93 188 19 98", //
    img: person24,
  },
  {    id: 25,
    name: "Yoqubov Akmal Abbosjon o'g'li",
    mahalla: "Navoiy MFY Yoshlar yetakchisi",
    phone: "+998 95 828 50 20", //
    img: person25,
  },




]

export default function RahbariyatPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title} >YOSHLAR YETAKCHILARI</h1>
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
