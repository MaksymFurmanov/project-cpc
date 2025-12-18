import styles from "./nav-sidebar.module.css";
import navLinks from "../../lib/nav-links";
import {useAppNavigation} from "../../hooks/use-app-navigation";
import {useTranslation} from "react-i18next";

export default function NavList({closeIfOpened}:{
    closeIfOpened: () => void
}) {
    const appNavigate = useAppNavigation();
    const {t} = useTranslation(["nav"]);

    const handleClick = (link: string) => {
        appNavigate(link);
        closeIfOpened();
    }

    return (
        <ul className={styles.sidebarList}>
            {navLinks.map((link, index) => {
                return (
                    <li key={index}
                        onClick={() => handleClick(link.url)}
                        className={"not-selectable"}
                    >
                        {t(link.label)}
                    </li>
                )
            })}
        </ul>
    );
}