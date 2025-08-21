import styles from "./nav-sidebar.module.css";
import navLinks from "../../lib/nav-links";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function NavSidebar({sidebarToggle}) {
    const navigate = useNavigate();
    const {t} = useTranslation(["nav"]);

    return (
        <div className={`${styles.sidebar} ${sidebarToggle && styles.shiftRight}`}>
            <ul className={styles.sidebarList}>
                {navLinks.map((link, index) => {
                    return (
                        <li key={index}
                            onClick={() => {
                                navigate(link.url)
                            }}
                        >
                            {t("aboutUsLink")}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}