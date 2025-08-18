import styles from "./steps.module.css";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Step({number, heading, delay, className, children}) {
    useEffect(() => {
        return () => {
            AOS.init({
                duration: 1000,
                easing: "ease-in-out",
                once: false,
            });
        };
    }, []);


    return (
        <div className={`${styles.step} ${className}`}
             data-aos="fade-up"
             data-aos-delay={delay}>
            <h2>
                {number}
            </h2>
            <h3>
                {heading}
            </h3>
            <p>
                {children}
            </p>
        </div>
    );
}