import styles from './header.module.css';
import {ReactComponent as Logo} from '../../assets/logo-white.svg';
import NavBar from "./nav-bar";
import SidebarButton from "./sidebar-button";
import LanguageSwitcher from "./language-switcher";
import useScrolledFromTop from "../../hooks/useScrolledFromTop";

export default function Header({sidebarToggle, setSidebarToggle}) {
    const {scrolled} = useScrolledFromTop(50);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <NavBar/>
            <div className={styles.buttonsRight}>
                <LanguageSwitcher/>
                <SidebarButton sidebarToggle={sidebarToggle}
                               setSidebarToggle={setSidebarToggle}
                />
            </div>
        </header>
    );
}