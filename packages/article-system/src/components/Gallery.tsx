"use client";

import styles from "./article-system.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import {ReactNode, useEffect} from "react";

export function Gallery({images, setCurrImg, overlay, viewport}: {
    images: string[],
    setCurrImg?: (index: number) => void,
    overlay?: ReactNode,
    viewport?: ReactNode
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        containScroll: "trimSnaps",
        active: !viewport,
    });

    useEffect(() => {
        if (!emblaApi || !setCurrImg) return;

        const handleSelect = () => {
            setCurrImg(emblaApi.selectedScrollSnap());
        };

        handleSelect();

        emblaApi.on("select", handleSelect);

        return () => {
            emblaApi.off("select", handleSelect);
        };
    }, [emblaApi, setCurrImg]);

    const showArrows = images.length > 1;

    const handlePrev = () => {
        if (viewport) return;
        emblaApi?.scrollPrev();
    };

    const handleNext = () => {
        if (viewport) return;
        emblaApi?.scrollNext();
    }

    return (
        <div>
            <div className={clsx(styles.gallery, "not-selectable")}>
                {showArrows && (
                    <IoIosArrowBack
                        className={styles.galleryIcon}
                        onClick={handlePrev}
                    />
                )}

                <div className={styles.carousel}
                     ref={emblaRef}
                >
                    {viewport ? (
                        viewport
                    ) : (
                        <div className={styles.wrapper}>
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={""}
                                    className={styles.image}
                                />
                            ))}
                        </div>
                    )}

                    {overlay}
                </div>

                {showArrows && (
                    <IoIosArrowForward
                        className={styles.galleryIcon}
                        onClick={handleNext}
                    />
                )}
            </div>
        </div>
    );
}