import styles from "./nav-sidebar.module.css";
import NavList from "./nav-list";
import DownBlock from "./down-block";

export default function NavSidebar({sidebarToggle, closeIfOpened}: {
    sidebarToggle: boolean,
    closeIfOpened: () => void
}) {
    return (
        <div className={`${styles.sidebar} ${sidebarToggle && styles.shiftRight}`}>
            <NavList closeIfOpened={closeIfOpened}/>
            <DownBlock/>
        </div>
    );
}