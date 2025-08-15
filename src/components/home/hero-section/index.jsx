import styles from "./hero-section.module.css";

export default function HeroSection() {
    return (
        <section className={styles.container}>
            <video autoPlay
                   muted
                   loop
                   playsInline className={styles.bgVideo}>
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