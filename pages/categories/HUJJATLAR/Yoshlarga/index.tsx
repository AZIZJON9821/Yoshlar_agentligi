"use client"

import styles from "./index.module.css"

interface Hujjat {
  id: number
  sana: string
  son: string
  nomi: string
  turi: string
}

const data: Hujjat[] = [
  {
    id: 1,
    sana: "2016-yil 14-sentabr",
    son: "O‘RQ–406-son",
    nomi: "Yoshlarga oid davlat siyosati to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 2,
    sana: "2019-yil 2-dekabr",
    son: "O‘RQ-585-son",
    nomi: "Volontyorlik faoliyati to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 3,
    sana: "2024-yil 3-oktyabr",
    son: "O‘RQ-970-son",
    nomi: "Kreativ iqtisodiyot to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 4,
    sana: "2022-yil 25-yanvar",
    son: "O‘RQ-747-son",
    nomi:
      "Yoshlar bilan ishlash tizimi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga qo‘shimchalar kiritish to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 5,
    sana: "2017-yil 25-avgust",
    son: "O‘RQ–437-son",
    nomi: "O‘zbekiston Respublikasi yoshlari kunini belgilash to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 6,
    sana: "2017-yil 28-dekabr",
    son: "O‘RQ-451-son",
    nomi: "“Kelajak bunyodkori” medalini ta’sis etish to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 7,
    sana: "2024-yil 14-noyabr",
    son: "O‘RQ-996-son",
    nomi: "Bolalarni zo‘ravonlikning barcha shakllaridan himoya qilish to‘g‘risida",
    turi: "O‘zbekiston Respublikasining Qonunlari",
  },
  {
    id: 8,
    sana: "2020-yil 30-iyun",
    son: "PF-6017-son",
    nomi:
      "O‘zbekiston Respublikasida yoshlarga oid davlat siyosatini tubdan isloh qilish va yangi bosqichga olib chiqish chora-tadbirlari to‘g‘risida",
    turi: "O‘zbekiston Respublikasi Prezidentining Farmonlari",
  },
  {
    id: 9,
    sana: "2021-yil 20-aprel",
    son: "PF-6208-son",
    nomi:
      "Yoshlarning tadbirkorlik faoliyatini qo‘llab-quvvatlash va bandligiga ko‘maklashish, ularni ijtimoiy himoya qilish hamda bo‘sh vaqtini mazmunli tashkil etishga oid qo‘shimcha chora-tadbirlar to‘g‘risida",
    turi: "O‘zbekiston Respublikasi Prezidentining Farmonlari",
  },
  {
    id: 10,
    sana: "2021-yil 13-iyul",
    son: "PF-6260-son",
    nomi:
      "Yoshlarni har tomonlama qo‘llab-quvvatlash va ularning ijtimoiy faolligini yanada oshirishga oid qo‘shimcha chora-tadbirlar to‘g‘risida",
    turi: "O‘zbekiston Respublikasi Prezidentining Farmonlari",
  },
]

export default function NormativPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Normativ-huquqiy hujjatlar</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>T/r</th>
              <th>Qabul qilingan sana</th>
              <th>Hujjat soni</th>
              <th>Hujjat nomi</th>
              <th>Turi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.sana}</td>
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
