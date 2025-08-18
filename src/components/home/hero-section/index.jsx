import styles from "./hero-section.module.css";
import {useEffect, useRef} from "react";

export default function HeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.setAttribute("playsinline", "");
        }
    }, []);

    return (
        <section className={styles.container}>
            <video ref={videoRef}
                autoPlay
                   muted
                   loop
                   playsInline={true}
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