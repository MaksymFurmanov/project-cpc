"use client";

import styles from "./articles.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import GalleryLoading from "./skeletons/GalleryLoading";
import {useImgPreload} from "../../hooks";

export function Gallery({images}: {
    images: string[]
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        containScroll: "trimSnaps",
    });

    const preloaded = useImgPreload(images);

    if (!preloaded) return <GalleryLoading/>;

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
                    <div className={styles.wrapper}>
                        {images.map((img, index) => (
                            <img className={styles.image}
                                 key={index}
                                 src={img}
                                 alt={""}
                            />
                        ))}
                    </div>
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