import styles from "./about-us-brief.module.css";

export default function AboutUsBrief() {
    return (
        <article className={styles.container}>
            <img className={styles.mainLogo}
                 src={"/kosice-logo.png"}
                 alt={"Košice"}
            />
            <h2>
                Centrum podpory cudzincov
            </h2>
            <p>
                Ciel’om Magistrátu mesta Košice je túto podporu systematicky rozvíjať. Aj preto v jeho štruktúrach
                pôsobí Centrum podpory cudzincov, ktoré poskytuje svoje služby prostredníctvom kancelárie prvého
                kontaktu (KPK) pre cudzincov.
            </p>
            <button>
                Kontakty
            </button>
        </article>
    );
}