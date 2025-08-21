// index.jsx — тільки додайте ref та useEffect, розмітку не змінюємо
import { useEffect, useRef } from "react";
import styles from "./hero-section.module.css";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation(["home"]);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => v.play().catch(() => { /* iOS міг заблокувати — ігноруємо */ });

    const onLoaded = () => tryPlay();
    const onVisible = () => { if (!document.hidden) tryPlay(); };
    const onTouch = () => { tryPlay(); window.removeEventListener("touchstart", onTouch); };

    v.addEventListener("loadeddata", onLoaded, { once: true });
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("touchstart", onTouch, { passive: true });

    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return (
    <section className={styles.container}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        /* eslint-disable-next-line react/no-unknown-property */
        webkit-playsinline=""
        className={styles.bgVideo}
        poster="/videos/hero-poster.jpg"  /* опціонально: фрейм-заставка без «синього» */
      >
        {/* iOS-сумісний H.264 — перший */}
        <source
          src="/videos/bg-kosice-1080.avc.mp4"
          type='video/mp4; codecs="avc1.640029, mp4a.40.2"'
        />
        {/* HEVC (працює там, де доступно) */}
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

