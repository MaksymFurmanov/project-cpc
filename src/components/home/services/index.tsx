import styles from "./services.module.css";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import Modal from "../../modal/modal";
import servicesList from "./services-list";
import clsx from "clsx";

export default function Services() {
    const {t} = useTranslation("home");

    const [activeLabel, setActiveLabel] = useState<string | null>(null);

    const openModal = (label: string) => {
        setActiveLabel(label);
    };

    const closeModal = () => {
        setActiveLabel(null);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    {t("services.title")}
                </h2>

                <ul className={styles.grid} aria-label="Zoznam služieb">
                    {servicesList.map((it, i) => (
                        <li key={i} className={clsx(styles.card, "not-selectable")} onClick={() => openModal(it.label)}>
                            <div className={styles.border}>
                                <div className={styles.inner}>
                                    <span className={styles.icon}
                                          aria-hidden="true">
                                        {it.icon}
                                    </span>
                                    <span className={styles.label}>
                                        {t(`services.${it.label}.title`)}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal open={!!activeLabel}
                   onClose={closeModal}>
                {activeLabel && (
                    <>
                        <h3>{t(`services.${activeLabel}.title`)}</h3>
                        <p>{t(`services.${activeLabel}.description`)}</p>
                    </>
                )}
            </Modal>
        </section>
    );
}

