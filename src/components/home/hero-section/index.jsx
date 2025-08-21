import {useEffect, useRef} from "react";
import styles from "./hero-section.module.css";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
    const {t} = useTranslation(["home"]);

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const tryPlay = () => video.play().catch(() => {});
        const onLoaded = () => {
            tryPlay();
        };
/*        const onVisible = () => {
            tryPlay();
        };*/
/*        const onTouch = () => {
            tryPlay();
            window.removeEventListener("touchstart", onTouch);
        };*/

        //video.addEventListener("loadeddata", onLoaded, {once: true});
        //document.addEventListener("visibilitychange", onVisible);
        //window.addEventListener("touchstart", onTouch, {passive: true});
        window.addEventListener("load", onLoaded);

        return () => {
            //video.removeEventListener("loadeddata", onLoaded);
/*            document.removeEventListener("visibilitychange", onVisible);
            window.removeEventListener("touchstart", onTouch);*/
            window.removeEventListener("touchstart", onLoaded);
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
                className={styles.bgVideo}
            >
                <source
                    src="/videos/bg-kosice-1080.avc.mp4"
                    type='video/mp4; codecs="avc1.640029, mp4a.40.2"'
                />
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

