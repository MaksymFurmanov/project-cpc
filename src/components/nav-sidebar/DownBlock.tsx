import styles from "../nav-sidebar/nav-sidebar.module.css";
import {FaFacebookF, FaViber, FaTelegramPlane} from "react-icons/fa";
import clsx from "clsx";

export default function DownBlock() {
    return (
        <div>
            <div className={clsx(styles.socials, "not-selectable")}>
                <a className={styles.socialsBtn} href="https://www.facebook.com/CentrumPodporyCudzincovKosice" aria-label="Facebook">
                <FaFacebookF />
                </a>
                <a className={styles.socialsBtn} href="https://t.me/+LjEG_D7cxxA0OTg8" aria-label="Telegram">
                    <FaTelegramPlane />
                </a>
                <a className={styles.socialsBtn} href="tel:+421908365995" aria-label="Viber">
                    <FaViber />
                </a>
            </div>
        </div>
    );
}