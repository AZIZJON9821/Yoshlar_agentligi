"use client"

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./index.module.css"

const leaders = [
  { id: 3, mahalla: "Fayzobod MFY" },
  { id: 4, mahalla: "Lolaariq MFY" },
  { id: 5, mahalla: "Oybek MFY" },
  { id: 6, mahalla: "Mo'minobod MFY" },
  { id: 7, mahalla: "Yangiobod MFY" },
  { id: 8, mahalla: "Oqtepa MFY" },
  { id: 9, mahalla: "Mustaqillik MFY" },
  { id: 10, mahalla: "Mitan MFY" },
  { id: 11, mahalla: "Guliston MFY" },
  { id: 12, mahalla: "Ko'l otar MFY" },
  { id: 13, mahalla: "Oqtom MFY" },
  { id: 14, mahalla: "Birlik MFY" },
  { id: 15, mahalla: "Mingtepa MFY" },
  { id: 16, mahalla: "Chimqo‘rg‘on MFY" },
  { id: 17, mahalla: "Saidobod MFY" },
  { id: 18, mahalla: "Taraqqiyot MFY" },
  { id: 19, mahalla: "G'ayrat MFY" },
  { id: 20, mahalla: "Donqorg‘on MFY" },
  { id: 21, mahalla: "Bekobod MFY" },
  { id: 22, mahalla: "Do'stlik MFY" },
  { id: 23, mahalla: "Kultepa MFY" },
  { id: 24, mahalla: "Muratali MFY" },
  { id: 25, mahalla: "Navoiy MFY" },
]

export default function MurojatPage() {
  const [form, setForm] = useState({
    name: "",
    passportLetters: "",
    passportNumbers: "",
    mahalla: "",
    birthYear: "",
    phone: "+998 ",
    message: "",
  })

  // Kiritishdagi o'zgarishlar
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target

    // faqat harf (katta)
    if (name === "passportLetters") {
      value = value.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 2)
    }

    // faqat raqam
    if (name === "passportNumbers") {
      value = value.replace(/\D/g, "").slice(0, 7)
    }

    // telefon raqam formatlash
    if (name === "phone") {
      value = formatPhone(value)
    }

    setForm({ ...form, [name]: value })
  }

  // Telefon raqam formatlash funksiyasi
  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, "")
    if (digits.startsWith("998")) digits = digits.slice(3)
    digits = digits.slice(0, 9)

    let formatted = "+998 "
    if (digits.length > 0) formatted += digits.slice(0, 2)
    if (digits.length > 2) formatted += " " + digits.slice(2, 5)
    if (digits.length > 5) formatted += " " + digits.slice(5, 7)
    if (digits.length > 7) formatted += " " + digits.slice(7, 9)

    return formatted
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const BOT_TOKEN = "8433240684:AAEauLTZWuBZ-pOh0XG31smYU6_e9K1g7yo"
    const CHAT_ID = "-1003060267448"

    const now = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })
    const passportFull = `${form.passportLetters}${form.passportNumbers}`

    const text = `
📝 Yangi murojaat keldi:
📅 Sana va vaqt: ${now}
👤 F.I.O: ${form.name}
🆔 Pasport: ${passportFull}
🏘 Mahalla: ${form.mahalla}
🎂 Tug‘ilgan sana: ${form.birthYear}
📞 Telefon: ${form.phone}
💬 Murojaat: ${form.message}
    `

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
      })

      toast.success("Murojatingiz qabul qilindi va Telegram botga yuborildi!", {
        position: "top-right",
        autoClose: 5000,
      })

      setForm({
        name: "",
        passportLetters: "",
        passportNumbers: "",
        mahalla: "",
        birthYear: "",
        phone: "+998 ",
        message: "",
      })
    } catch (error) {
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko‘ring.", {
        position: "top-right",
        autoClose: 5000,
      })
    }
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h1 className={styles.title}>Murojat qoldirish</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          I.F.O:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        {/* 🔹 Pasport ikki qismga bo‘lingan */}
        <label className={styles.formLabel}>
          Pasport seriya:
          <div className={styles.passportGroup}>
            <input
              type="text"
              name="passportLetters"
              value={form.passportLetters}
              onChange={handleChange}
              placeholder="AA"
              required
              className={`${styles.input} ${styles.passportLetters}`}
            />
            <input
              type="text"
              name="passportNumbers"
              value={form.passportNumbers}
              onChange={handleChange}
              placeholder="1234567"
              required
              className={`${styles.input} ${styles.passportNumbers}`}
            />
          </div>
        </label>

        <label className={styles.formLabel}>
          Mahalla:
          <select
            name="mahalla"
            value={form.mahalla}
            onChange={handleChange}
            required
            className={styles.input}
          >
            <option value="">Tanlang</option>
            {leaders.map((leader) => (
              <option key={leader.id} value={leader.mahalla}>
                {leader.mahalla}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.formLabel}>
          Tug‘ilgan sana:
          <input
            type="date"
            name="birthYear"
            value={form.birthYear}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.formLabel}>
          Telefon raqamingiz:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.formLabel}>
          Murojatingiz:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className={styles.textarea}
          />
        </label>

        <button type="submit" className={styles.button}>
          Jo‘natish
        </button>
      </form>
    </div>
  )
}
