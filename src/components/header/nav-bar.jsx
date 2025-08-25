import styles from "./header.module.css";
import navLinks from "../../lib/nav-links";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function NavBar() {
    const navigate = useNavigate();
    const {t} = useTranslation(["nav"]);

    return (
        <nav className={styles.links}>
            {navLinks.map((link, index) => {
                return (
                    <p key={index}
                       onClick={() =>
                           navigate(link.url)
                       }>
                        {t(link.label)}
                    </p>
                )
            })}
        </nav>
    );
}