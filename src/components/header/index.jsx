import styles from './header.module.css';
import {useEffect, useState} from "react";
import navLinks from "../../lib/nav-links";
import {useNavigate} from "react-router-dom";
import {RiMenu2Line} from "react-icons/ri";
import {IoMdClose} from "react-icons/io";

export default function Header({sidebarToggle, setSidebarToggle}) {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

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
                <img alt={"Košice"}
                     src={"logo-white.png"}
                />
            </div>
            <nav className={styles.links}>
                {navLinks.map((link, index) => {
                    return (
                        <p key={index}
                           onClick={() =>
                               navigate(link.url)
                           }>
                            {link.label}
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