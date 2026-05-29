import styles from "./footer.module.css";
import {useTranslation} from "react-i18next";

export default function SecondOfficeBlock() {
    const {t} = useTranslation(["footer"]);

    return (
        <div className={styles.bottomGrid}>
            <div className={styles.block}>
                <h3 className={styles.title}>{t("rightSide.name")}{/*KANCELÁRIA PRVÉHO KONTAKTU PRE CUDZINCOV*/}</h3>
                <address className={styles.address}>
                    Tr. SNP 48/A,
                    <br/>
                    04011, Košice-Západ
                </address>
                <p className={styles.line}>
                    {t("phone")}:{" "}
                    <a href="tel:+421556419190" className={styles.link}>
                        +421 55 64 19 190
                    </a>
                </p>
            </div>
        </div>
    );
}