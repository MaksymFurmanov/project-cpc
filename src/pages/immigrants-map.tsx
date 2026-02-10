import styles from "../components/immigrants-map/immigrants-map.module.css";
import PdfContainer from "../components/immigrants-map/pdf-container";
import {useTranslation} from "react-i18next";
import {IoArrowDownCircle} from "react-icons/io5";
import {useRef} from "react";
import clsx from "clsx";

export default function ImmigrantsMap() {
    const {t} = useTranslation(["immigrants-map"]);

    const endRef = useRef<HTMLDivElement>(null);

    const scrollDownHandler = () => {
        endRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className={styles.container}>
            <h1>
                {t("title")}
            </h1>

            <PdfContainer/>

            <h2 className={styles.callUs}>
                {t("callUs")}
            </h2>

            <div className={clsx(styles.arrow, "not-selectable")}>
                <IoArrowDownCircle onClick={scrollDownHandler}/>
            </div>

            <div ref={endRef} className={styles.scrollPoint}/>
        </main>
    );
}