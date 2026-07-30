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
    console.log("Gallery images", images);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        containScroll: "trimSnaps",
        active: !viewport,
    });

    useEffect(() => {
        emblaApi?.reInit();
        console.log("React images:", images.length);
        console.log("Embla slides:", emblaApi?.slideNodes().length);
    }, [images, emblaApi]);

    useEffect(() => {
        if (!setCurrImg) return;
        if (!emblaApi) return;

        const handleScroll = () => {
            setCurrImg?.(emblaApi.selectedScrollSnap());
        };

        handleScroll();
        emblaApi.on("select", handleScroll);

        return () => {
            emblaApi.off("select", handleScroll);
        };
    }, [images, emblaApi, setCurrImg]);

    const isOneImg = images.length === 1;

    return (
        <div>
            <div className={clsx(styles.gallery, "not-selectable")}>
                {!isOneImg && emblaApi?.canScrollPrev() && (
                    <IoIosArrowBack
                        className={styles.galleryIcon}
                        onClick={() => emblaApi.scrollPrev()}
                    />
                )}

                <div className={styles.carousel} ref={emblaRef}>
                    {viewport ? viewport : (
                        <div className={styles.wrapper}>
                            {images.map((src, index) => (
                                <img src={src}
                                     alt={""}
                                     key={index}
                                     className={styles.image}
                                />
                            ))}
                        </div>
                    )}

                    {overlay}
                </div>

                {!isOneImg && emblaApi?.canScrollNext() && (
                    <IoIosArrowForward
                        className={styles.galleryIcon}
                        onClick={() => emblaApi.scrollNext()}
                    />
                )}
            </div>
        </div>
    );
}