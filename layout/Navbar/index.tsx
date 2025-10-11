"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./navbar.module.css"
import gerb from "./image/gerb.png"
import building from "./image/building.png"
import Image from "next/image"
import { Home, Menu, X } from "lucide-react" // ✅ Yangi ikonlar

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      // O'zbekiston vaqti (GMT+5) ni hisoblash
      const uzTime = new Date(now.getTime() + 5 * 60 * 60 * 1000)

      const timeString = uzTime.toLocaleTimeString("en-GB", {
        hour12: false,
        timeZone: "UTC",
      })

      const day = String(uzTime.getUTCDate()).padStart(2, "0")
      const month = String(uzTime.getUTCMonth() + 1).padStart(2, "0")
      const year = uzTime.getUTCFullYear()
      const dateString = `${day}.${month}.${year}`

      setCurrentTime(`${timeString} (GMT+5)`)
      setCurrentDate(dateString)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // ✅ Mobil menyuni ochish/yopish funksiyasi
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Mobil menyu ochilganda dropdownni yopish
    if (isMobileMenuOpen) {
      setActiveDropdown(null)
    }
  }

  // ✅ Mobil rejimda dropdownni bosish orqali boshqarish
  const handleDropdownToggle = (dropdownName: string) => {
    if (isMobileMenuOpen) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
    }
  }

  // ✅ Link bosilganda hamma narsani yopish
  const handleCloseMenu = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={styles.navbar}>
      {/* 🔵 Top header */}
      <div className={styles.topHeader}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>PISKENT</h2>
          </div>

          <div className={styles.center}>
            <div className={styles.emblem}>
              <Image src={gerb} alt="Uzbekistan Emblem" priority />
            </div>
            <div className={styles.title}>
              <span>PISKENT TUMANI YOSHLAR</span>
              <span>ISHLARI BO‘LIMI</span>
            </div>
            <div className={styles.building}>
              <Image src={building} alt="Building" />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.timeBlock}>
              <span className={styles.time}>{currentTime}</span>
              <span className={styles.date}>{currentDate}</span>
            </div>
          </div>
          
          {/* ✅ YANGI: Mobile menyu tugmasi */}
          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>

        </div>
      </div>

      {/* ⚪ White section */}
      <div className={styles.whiteSection}>
        <div className={styles.container}>
          <div className={styles.agency}>
            <div className={styles.agencyLogo}>
              <Image src={gerb} alt="Uzbekistan Emblem" />
            </div>
            <h2>
              O‘ZBEKISTON RESPUBLIKASI  <br />  YOSHLAR ISHLARI
              AGENTLIGI <br />  PISKENT TUMANI BO‘LIMI
            </h2>
          </div>
          <div className={styles.contact}>
            <span className={styles.phoneLabel}>ISHONCH TELEFONI</span>
            <span className={styles.phoneNumber}>1093</span>
          </div>
        </div>
      </div>

      {/* 🔘 Navigation */}
      <nav className={styles.navigation}>
        {/* ✅ Mobil rejimda menyu ochiq bo'lsa, max-height'ni oshirish uchun ushbu div qo'shildi */}
        <div className={`${styles.container} ${isMobileMenuOpen ? styles.menuContainerOpen : ''}`}>
          <div className={isMobileMenuOpen ? styles.menuOpen : styles.menu}>
            {/* ✅ Home icon link */}
            <div className={styles.dropdown}>
              <Link
                href="/"
                className={styles.dropdownButton}
                prefetch={true}
                onClick={handleCloseMenu}
              >
                <Home size={20} />
              </Link>
            </div>

            {/* AGENTLIK */}
            <div
              className={`${styles.dropdown} ${activeDropdown === "agentlik" ? styles.active : ""}`}
              // Desktop: mouseEnter orqali ochish
              onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown("agentlik")}
              onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
            >
              <button onClick={() => handleDropdownToggle("agentlik")}>
                AGENTLIK HAQIDA {isMobileMenuOpen && <span className={styles.mobileArrow}>▼</span>}
              </button>
              {/* Desktopda har doim, mobil rejimda faqat active bo'lsa ko'rsatish */}
              {(activeDropdown === "agentlik" || !isMobileMenuOpen) && (
                <div className={styles.dropdownMenu}>
                  <Link href="/categories/agentlik_haqida/agentlikhaq" onClick={handleCloseMenu}>
                    Agentlik haqida
                  </Link>
                  <Link href="/categories/agentlik_haqida/Rahbariyat" onClick={handleCloseMenu}>
                    Rahbariyat
                  </Link>
                </div>
              )}
            </div>

            {/* FAOLIYAT */}
            <div
              className={`${styles.dropdown} ${activeDropdown === "faoliyat" ? styles.active : ""}`}
              onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown("faoliyat")}
              onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
            >
              <button onClick={() => handleDropdownToggle("faoliyat")}>
                FAOLIYAT {isMobileMenuOpen && <span className={styles.mobileArrow}>▼</span>}
              </button>
              {(activeDropdown === "faoliyat" || !isMobileMenuOpen) && (
                <div className={styles.dropdownMenu}>
                  <Link href="/categories/Faoliyat/Korupsiya" onClick={handleCloseMenu}>
                    Korupsiya qarshi kurash
                  </Link>
                  <Link href="/categories/Faoliyat/Yetakchilari" onClick={handleCloseMenu}>
                    Mahalla yetakchilari ro‘yxati
                  </Link>
                </div>
              )}
            </div>

            {/* HUJJATLAR */}
            <div
              className={`${styles.dropdown} ${activeDropdown === "hujjatlar" ? styles.active : ""}`}
              onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown("hujjatlar")}
              onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
            >
              <button onClick={() => handleDropdownToggle("hujjatlar")}>
                HUJJATLAR {isMobileMenuOpen && <span className={styles.mobileArrow}>▼</span>}
              </button>
              {(activeDropdown === "hujjatlar" || !isMobileMenuOpen) && (
                <div className={styles.dropdownMenu}>
                  <Link href="/categories/HUJJATLAR/Yoshlarga" onClick={handleCloseMenu}>
                    Yoshlarga oid hujjatlar
                  </Link>
                  <Link href="/categories/HUJJATLAR/2025" onClick={handleCloseMenu}>
                    2025 yilga doir hujjatlar
                  </Link>
                </div>
              )}
            </div>

            {/* BOG‘LANISH */}
            <div
              className={`${styles.dropdown} ${activeDropdown === "boglanish" ? styles.active : ""}`}
              onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown("boglanish")}
              onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
            >
              <button onClick={() => handleDropdownToggle("boglanish")}>
                BOG‘LANISH {isMobileMenuOpen && <span className={styles.mobileArrow}>▼</span>}
              </button>
              {(activeDropdown === "boglanish" || !isMobileMenuOpen) && (
                <div className={styles.dropdownMenu}>
                  <Link href="/categories/BOGLANISH/Murojat" onClick={handleCloseMenu}>
                    Murojat qoldirish
                  </Link>
                  <Link href="/categories/BOGLANISH/Hodim" onClick={handleCloseMenu}>
                    Mas'ul hodim
                  </Link>
                  <Link href="/categories/BOGLANISH/Matbuot" onClick={handleCloseMenu}>
                      Matbuot xizmati
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar