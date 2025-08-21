import styles from "./hero-section.module.css";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
  const {t} = useTranslation(["home"]);

  return (
    <section className={styles.container}>
      <video
        autoPlay
        muted
        loop
        playsInline={true}
        preload="auto"
        className={styles.bgVideo}
        /* eslint-disable-next-line react/no-unknown-property */
        webkit-playsinline=""
      >
        {/* Найсумісніше джерело для iOS — AVC (H.264) */}
        <source
          src="/videos/bg-kosice-1080.avc.mp4"
          type='video/mp4; codecs="avc1.640029, mp4a.40.2"'
        />
        {/* Додатково HEVC з правильним тегом hvc1 */}
        <source
          src="/videos/bg-kosice-1080.hevc.hvc1.mp4"
          type='video/mp4; codecs="hvc1"'
        />
      </video>

      <div className={styles.cover}>
        <h1>{t("heroSection.welcomeMsg")}</h1>
      </div>
    </section>
  );
}
