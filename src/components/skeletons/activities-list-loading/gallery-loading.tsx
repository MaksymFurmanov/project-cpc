import styles from "./activities-list-loading.module.css";

export default function GalleryLoading() {
    return (
        <div className={`${styles.gallerySkeleton} ${styles.skeleton}`}/>
    );
}