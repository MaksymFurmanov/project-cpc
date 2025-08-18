import Step from "./step";
import styles from "./steps.module.css";

export default function Steps() {
    return (
        <article className={styles.container}>
            <Step number={1}
                  heading={"Kontaktujte nás"}
                  delay={0}
            >
                Navštívte jednu z našich kancelárií centra alebo nám zavolajte, aby ste si dohodli stretnutie.
            </Step>
            <Step number={2}
                  heading={"Vysvetlite situáciu"}
                  delay={300}
                  className={styles.step2}
            >
                Povedzte nám, akú pomoc by ste potrebovali alebo s akými ťažkosťami sa stretávate pri integrácii v meste
                Košice.
            </Step>
            <Step number={3}
                  heading={"Postupujte podľa rád našich pracovníkov"}
                  delay={600}
                  className={styles.step3}
            >
                Urobíme všetko, čo je v našich silách, aby sme vám pomohli vyriešiť vaše otázky.
            </Step>
        </article>
    );
}