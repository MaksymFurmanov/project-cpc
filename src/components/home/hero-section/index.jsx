import styles from "./hero-section.module.css";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
    const {t} = useTranslation();

    return (
        <section className={styles.container}>
            <video autoPlay
                   muted
                   loop
                   playsInline={true}
                   className={styles.bgVideo}
            >
                <source src="/videos/bg-kosice-1080.hevc.mp4"
                        type="video/mp4"
                />
            </video>
            <div className={styles.cover}>
                <h1>
                    {t("welcomeMessage")}
                </h1>
            </div>
        </section>
    );
}