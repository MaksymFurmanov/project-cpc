import styles from "./footer.module.css";
import {useLocation} from "react-router-dom";
import WorkHours from "./WorkHours";
import SecondOfficeBlock from "./SecondOfficeBlock";
import FirstOfficeBlock from "./FirstOfficeBlock";

export default function Footer() {
    const year = new Date().getFullYear();
    const location = useLocation();

    return (
        <footer className={styles.container}>
            <div className={styles.content}>

                <div className={styles.topGrid}>
                    <FirstOfficeBlock/>

                    {location.pathname !== "/" ? (
                        <WorkHours/>
                    ) : (
                        <SecondOfficeBlock/>
                    )}
                </div>

                {location.pathname !== "/" && (
                    <>
                        <hr className={styles.divider}/>
                        <SecondOfficeBlock/>
                    </>
                )}

                {/* копірайт */}
                <div className={styles.copyRow}>
                    <span> © {year} Magistrát mesta Košice. Všetky práva vyhradené</span>
                </div>

            </div>
        </footer>
    );
}