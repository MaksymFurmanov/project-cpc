import styles from "./nav-sidebar.module.css";
import NavList from "./NavList";
import DownBlock from "./DownBlock";

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