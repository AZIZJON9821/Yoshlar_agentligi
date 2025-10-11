"use client"

import styles from "./index.module.css"

interface Hujjat {
  id: number
  son: string
  nomi: string
  turi: string
}

const data: Hujjat[] = [
  {
    id: 1,
    son: "PF-77-son",
    nomi: "Iqtidorli mutaxassislarning xorijda ta’lim olishini qo‘llab-quvvatlash, ularda kasbiy ko‘nikmalarini rivojlantirish va rag‘batlantirishga oid qo‘shimcha chora-tadbirlar to‘g‘risida",
    turi: "Farmon",
  },
  {
    id: 2,
    son: "PF-61-son",
    nomi: "Prezidentning yoshlarga oid ochiq muloqotida belgilangan vazifalarni amalga oshirishga doir chora-tadbirlar to‘g‘risida",
    turi: "Farmon",
  },
  {
    id: 3,
    son: "PQ-62-son",
    nomi: "Yoshlar tadbirkorligini rivojlantirish va bandligini ta’minlashga doir qo‘shimcha chora-tadbirlar to‘g‘risida",
    turi: "Qaror",
  },
  {
    id: 4,
    son: "PQ-61-son",
    nomi: "Oliy ta’lim tashkilotlari bitiruvchilarining ishga joylashishiga ko‘maklashish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida",
    turi: "Qaror",
  },
  {
    id: 5,
    son: "PQ-60-son",
    nomi: "Yoshlar tadbirkorligini hamda ularning bandligini ta’minlashga qaratilgan biznes loyihalarni qo‘llab-quvvatlash tizimini takomillashtirish chora-tadbirlari to‘g‘risida",
    turi: "Qaror",
  },
    {
    id: 6,
    son: "PF-59-son",
    nomi: "Yoshlar siyosatini yanada takomillashtirish va yoshlar bilan ishlash tizimini rivojlantirish chora-tadbirlari to‘g‘risida",
    turi: "Farmon",
  },
  
]

export default function Qonun2025Page() {
  return (
   <div className={styles.container}>
  <h1 className={styles.title}>2025-yilgi qonun hujjatlari</h1>
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>T/r</th>
          <th>Hujjat raqami</th>
          <th>Hujjat nomi</th>
          <th>Turi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h) => (
          <tr key={h.id}>
            <td>{h.id}</td>
            <td>{h.son}</td>
            <td>{h.nomi}</td>
            <td>{h.turi}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    )
}
