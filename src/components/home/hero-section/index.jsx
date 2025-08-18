import styles from "./hero-section.module.css";
import {useEffect, useRef} from "react";

export default function HeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        const playVideo = () => {
            if (videoRef.current) {
                videoRef.current.play().catch(() => {});
            }
        };

        document.addEventListener("touchstart", playVideo, { once: true });
        document.addEventListener("scroll", playVideo, { once: true });

        return () => {
            document.removeEventListener("touchstart", playVideo);
            document.removeEventListener("scroll", playVideo);
        };
    }, []);

    return (
        <section className={styles.container}>
            <video autoPlay
                   muted
                   loop
                   playsInline
                   webkit-playsinline="true"
                   className={styles.bgVideo}
            >
                <source src="/videos/bg-kosice-1080.mp4"
                        type="video/mp4"
                />
            </video>
            <div className={styles.cover}>
                <h1>
                    Vítajte v Košiciach
                </h1>
            </div>
        </section>
    );
}