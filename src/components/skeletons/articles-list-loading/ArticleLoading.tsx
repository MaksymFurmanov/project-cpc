import styles from "./articles-list-loading.module.css";
import GalleryLoading from "./GalleryLoading";

export default function ArticleLoading() {
    return (
        <div className={styles.card}>
            <GalleryLoading/>

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
    )
}