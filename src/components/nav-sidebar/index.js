import styles from "./nav-sidebar.module.css";
import navLinks from "../../lib/nav-links";
import {useNavigate} from "react-router-dom";

export default function NavSidebar({sidebarToggle}) {
    const navigate = useNavigate();

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
                            {link.label}
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}