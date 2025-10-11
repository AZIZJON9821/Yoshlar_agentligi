import { Instagram, Facebook, Youtube, Send } from "lucide-react"
import styles from "./footer.module.css"

const FooterLayout = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Section - Organization Info */}
        <div className={styles.leftSection}>
          <h3 className={styles.organizationTitle}>
            O'ZBEKISTON RESPUBLIKASI PISKENT 
            <br />
            TUMANI YOSHLAR ISHLARI AGENTLIGI
          </h3>
          <p className={styles.address}>100011, Toshkent viloyati, Piskent tumani</p>
        </div>

        {/* Center Section - Logo and Copyright */}
        <div className={styles.centerSection}>
          <div className={styles.logoText}>UZINFOCOM</div>
          <p className={styles.copyrightText}>
            © 2001-2025 Barcha huquqlar himoyalangan. Ushbu veb-saytdagi ma'lumotlardan foydalanganda havola
            ko'rsatilishi shart.
          </p>
          <div className={styles.updateTime}>
            <svg
              className={styles.refreshIcon}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
            Oxirgi yangilanish: 2025-09-29 15:46:04
          </div>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className={styles.rightSection}>
          <a
            href="https://www.instagram.com/_yoshlar_ishlari_piskent?igsh=OGl3amkxcHdvNW9x"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/1FE81zh9vB/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://t.me/yoshlar_ishlari_piskent"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Telegram"
          >
            <Send size={24} />
          </a>
          <a
            href="https://youtube.com/@yoshlar_ishlari_piskent?si=iFYjLtRZQ7-0ExMu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className={styles.disclaimer}>
        Diqqat! Agar siz matnda xatoliklarni aniqlaasangiz, ularni belgilab, ma'muriyatni xabardor qilish uchun
        Ctrl/Command+Enter tugmalarini bosing
      </div>
    </footer>
  )
}

export default FooterLayout
