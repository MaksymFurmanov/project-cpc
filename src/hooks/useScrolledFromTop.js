import {useEffect, useState} from "react";

export default function useScrolledFromTop(value) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > value);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            return window.removeEventListener("scroll", handleScroll);
        }
    }, [value]);

    return {scrolled};
}