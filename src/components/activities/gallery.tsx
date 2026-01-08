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

    const len = images.length;

    return (
        <div className={clsx(styles.gallery, "not-selectable")}>
            {len > 1 && emblaApi?.canScrollNext && (
                <IoIosArrowBack onClick={() => emblaApi?.scrollPrev()}/>
            )}

            <div className={styles.carousel} ref={emblaRef}>
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

            {len > 1 && emblaApi?.canScrollNext && (
                <IoIosArrowForward onClick={() => emblaApi?.scrollNext()}/>
            )}
        </div>
    );
}