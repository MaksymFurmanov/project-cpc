import {useEffect, useState} from "react";

export function useIsDesktop(): boolean {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 640px)");

        const handleChange = () => setIsDesktop(media.matches);

        handleChange();

        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    return isDesktop;
}