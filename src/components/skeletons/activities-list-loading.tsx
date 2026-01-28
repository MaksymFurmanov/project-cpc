import styles from "./activities-list-loading.module.css";

export default function ActivitiesListLoading() {
    return (
        <div className={styles.container}>
            <div>
                <div className={`${styles.paginationSkeleton} ${styles.skeleton}`}/>
            </div>
            <div className={styles.card}>
                <div className={`${styles.gallerySkeleton} ${styles.skeleton}`}/>

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
        </div>
    );
}