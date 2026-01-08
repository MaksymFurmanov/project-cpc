import styles from "./activities.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";

export default function Gallery({images}: {images: string[]}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        containScroll: 'trimSnaps',
    });

    const isOneImg = images.length === 1;

    return (
        <div className={clsx(styles.gallery, "not-selectable")}>
            {!isOneImg && emblaApi?.canScrollNext && (
                <IoIosArrowBack onClick={() => emblaApi?.scrollPrev()}/>
            )}

            <div className={styles.carousel} style={{margin: isOneImg ? "0 3.25em" : "0 auto"}} ref={emblaRef}>
                <div className={styles.wrapper}>
                    {images.map((img, key) => {
                        return (
                            <img key={key}
                                 src={img}
                                 alt={""}
                                 className={styles.image}
                            />
                        );
                    })}
                </div>
            </div>

            {!isOneImg && emblaApi?.canScrollNext && (
                <IoIosArrowForward onClick={() => emblaApi?.scrollNext()}/>
            )}
        </div>
    );
}