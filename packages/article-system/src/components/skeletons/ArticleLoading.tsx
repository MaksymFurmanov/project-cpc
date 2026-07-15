import styles from "./articles-skeletons.module.css";
import GalleryLoading from "./GalleryLoading";

export function ArticleLoading() {
    return (
        <div className={styles.card}>
            <GalleryLoading />

            <div className={styles.textContent}>
                <div className={`${styles.titleSkeleton} ${styles.skeleton}`}/>
                <div className={`${styles.dateSkeleton} ${styles.skeleton}`}/>

                <div className={styles.textSkeleton}>
                    <span className={styles.skeleton}/>
                    <span className={styles.skeleton}/>
                    <span className={styles.skeleton}/>
                    <span className={styles.skeleton}/>
                </div>
            </div>
        </div>
    );
}