import styles from "./activities.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";

export default function Gallery({images}: {images: string[]}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        containScroll: 'trimSnaps',
    });

    return (
        <div className={styles.gallery}>
            {emblaApi?.canScrollNext && (
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

            {emblaApi?.canScrollNext && (
                <IoIosArrowForward onClick={() => emblaApi?.scrollNext()}/>
            )}
        </div>
    );
}