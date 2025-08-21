import styles from "./about-us-brief.module.css";
import {useTranslation} from "react-i18next";

export default function AboutUsBrief() {
    const {t} = useTranslation(["home"]);

    return (
        <article className={styles.container}>
            <img className={styles.mainLogo}
                 src={"/kosice-logo.png"}
                 alt={"Košice"}
            />
            <h2>
                {t("aboutUsBrief.title")}
                {/*Centrum podpory cudzincov*/}
            </h2>
            <p>
                {t("aboutUsBrief.text")}
                {/*Ciel’om Magistrátu mesta Košice je túto podporu systematicky rozvíjať. Aj preto v jeho štruktúrach
                pôsobí Centrum podpory cudzincov, ktoré poskytuje svoje služby prostredníctvom kancelárie prvého
                kontaktu (KPK) pre cudzincov.*/}
            </p>
            <button>
                {t("aboutUsBrief.contactsButton")}
                {/*Kontakty*/}
            </button>
        </article>
    );
}