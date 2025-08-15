import { useEffect, useRef, useState } from "react";
import styles from "./about-kosice.module.css";

export default function AboutKosice() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width:1024px)");
    const updateMQ = () => setIsDesktop(mq.matches);
    updateMQ();
    mq.addEventListener?.("change", updateMQ);

    let raf = 0;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const speedMobile = reduce ? 0 : 0.25; // mobile/tablet
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const next = Math.max(-200, Math.min(200, -rect.top * speedMobile));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(next));
    };

    // паралакс потрібен лише не на desktop
    if (!isDesktop) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      mq.removeEventListener?.("change", updateMQ);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className={styles.cover}
      aria-labelledby="about-kosice-title"
      /* desktop: фон секції, mobile/tablet: фон у .parallaxImg */
      style={isDesktop ? { backgroundImage: 'url("/img/about-kosice.jpg")' } : undefined}
    >
      {/* Mobile/Tablet parallax background */}
      {!isDesktop && (
        <div className={styles.parallaxWrap}>
          <div
            className={styles.parallaxImg}
            style={{
              transform: `translate3d(0, ${offset}px, 0)`,
              backgroundImage: 'url("/img/about-kosice.jpg")',
            }}
          />
        </div>
      )}

      {/* Overlay — спільний для всіх */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h4 id="about-kosice-title" className={styles.kicker}>KOŠICE</h4>
        <p className={styles.text}>
          Košice sú otvoreným a priateľským mestom, ktoré srdečne víta cudzincov prichádzajúcich za prácou,
          štúdiom či podnikaním. Ponúkajú pestré možnosti profesionálneho uplatnenia, kvalitné vzdelávacie
          inštitúcie a priaznivé podnikateľské prostredie. S bohatou kultúrou, živým spoločenským životom a
          multikultúrnou atmosférou sa Košice stávajú miestom, kde sa ľudia z rôznych krajín cítia ako doma.
          Košičania sú známi svojou pohostinnosťou a ochotou pomôcť cudzincom v integrácii do miestnej komunity.
        </p>
      </div>
    </section>
  );
}


