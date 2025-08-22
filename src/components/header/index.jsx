import styles from './header.module.css';
import {useEffect, useState} from "react";
import navLinks from "../../lib/nav-links";
import {useNavigate} from "react-router-dom";
import {RiMenu2Line} from "react-icons/ri";
import {IoMdClose} from "react-icons/io";
import {ReactComponent as Logo} from '../../assets/logo-white.svg';
import {useTranslation} from "react-i18next";

export default function Header({sidebarToggle, setSidebarToggle}) {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const {t} = useTranslation(["nav"]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            return window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const openSidebar = () => {
        setSidebarToggle(true);
    }

    const closeSidebar = () => {
        setSidebarToggle(false);
    }

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.logo}>
                <Logo/>
            </div>
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
            <div className={styles.burgerIconContainer}>
                {sidebarToggle
                    ? <IoMdClose onClick={() => {
                        closeSidebar()
                    }}/>
                    : <RiMenu2Line onClick={() => {
                        openSidebar()
                    }}/>
                }
            </div>
        </header>
    );
}