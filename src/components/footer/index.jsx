import { FaFacebookF, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      {/* Внутрішній блок для центрування і обмеження ширини */}
      <div className={styles.content}>
        
        {/* верхній блок */}
        <div className={styles.topGrid}>
          {/* ліва колонка */}
          <div className={styles.block}>
            <h3 className={styles.title}>
              KONTAKTNÉ SPOLOČENSKO-INFORMAČNÉ CENTRUM
            </h3>
            <address className={styles.address}>
              Hlavná 68, Košice, B 214, 2. posch.
              <br />
              040 01, Staré Mesto
            </address>
            <p className={styles.line}>
              Phone:{" "}
              <a href="tel:+421908365995" className={styles.link}>
                +421 908 365 995
              </a>
            </p>
            <p className={styles.line}>
              Email:{" "}
              <a href="mailto:centrumH68@kosice.sk" className={styles.link}>
                centrumH68@kosice.sk
              </a>
            </p>
            <div className={styles.icons}>
              <a className={styles.iconBtn} href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className={styles.iconBtn} href="#" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a className={styles.iconBtn} href="tel:+421908365995" aria-label="Phone">
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          {/* права колонка */}
          <div className={styles.block}>
            <h3 className={styles.title}>OTVÁRACIE HODINY</h3>
            <ul className={styles.hours}>
              <li><span>Pondelok</span><span>8:00 – 15:00 h.</span></li>
              <li><span>Utorok</span><span>8:00 – 15:00 h.</span></li>
              <li><span>Streda</span><span>8:00 – 16:00 h.</span></li>
              <li><span>Štvrtok</span><span>8:00 – 15:00 h.</span></li>
              <li><span>Piatok</span><span>8:00 – 14:00 h.</span></li>
            </ul>
            <p className={styles.note}>Obedňajšia prestávka: 12:00 – 12:30 h.</p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* нижній блок */}
        <div className={styles.bottomGrid}>
          <div className={styles.block}>
            <h3 className={styles.title}>KANCELÁRIA PRVÉHO KONTAKTU PRE CUDZINCOV</h3>
            <address className={styles.address}>
              Tr. SNP 48/A, Košice
              <br />
              040 10, Staré Mesto
            </address>
            <p className={styles.line}>
              Phone:{" "}
              <a href="tel:+421556419190" className={styles.link}>
                +421 55 64 19 190
              </a>
            </p>
          </div>
        </div>

        {/* копірайт */}
        <div className={styles.copyRow}>
          <span>Text © {year} Košice</span>
        </div>

      </div>
    </footer>
  );
}